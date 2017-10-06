/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var should = require('should');
var path = require('path');
var fs = require('fs');
var util = require('util');
var profile = require('../../../../lib/util/profile');
var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var VMTestUtil = require('../../../util/vmTestUtil');

/* precreated AD app environment variables allow the
 * test to run from context of the service principal 
 * which does not have the ability to create AD apps 
 */
var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}, {
  name: 'ADE_ADAPP_NAME',
  defaultValue: ''
}, {
  name: 'ADE_ADAPP_SECRET',
  defaultValue: ''
}, {
  name: 'ADE_ADSP_APPID',
  defaultValue: ''
}, {
  name: 'ADE_KV_ID',
  defaultValue: ''
}, {
  name: 'ADE_KV_URL',
  defaultValue: ''
}, {
  name: 'SSHCERT',
  defaultValue: 'test/myCert.pem'
}, {
  name: 'ADE_NSGT_URI',
  defaultValue: ''
}];

var testLocation,
  testprefix = 'arm-cli-vm-disk-encryption-linux',
  groupPrefix = 'xplatTestRG',
  groupName,
  vmPrefix = 'xplatTestVM',
  vmName,
  adminUserPrefix = 'xptadmin',
  adminUsername,
  imageUrn = 'Canonical:UbuntuServer:16.04.0-LTS:latest',

  adAppName,
  adAppClientSecret,
  adServicePrincipalAppId,

  subscriptionId,
  diskEncryptionKeyVaultId,
  diskEncryptionKeyVaultUrl,
  sshPublicKeyFile,
  nsgTemplateUri;

describe('arm', function () {
  describe('compute', function () {
    var suite, retry = 5;
    var vmTest = new VMTestUtil();
    before(function (done) {
      this.timeout(vmTest.timeoutLarge * 10);
      suite = new CLITest(this, testprefix, requiredEnvironment);
      suite.setupSuite(function () {
        // resource group and virtual machine 
        testLocation = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.generateId(groupPrefix, null);
        vmName = suite.isMocked ? vmName : suite.generateId(vmPrefix, null);
        adminUsername = suite.generateId(adminUserPrefix, null);
        sshPublicKeyFile = process.env.SSHCERT;
        nsgTemplateUri = process.env.ADE_NSGT_URI;

        // active directory (precreated to facilitate automation from service principal context)
        adAppName = process.env.ADE_ADAPP_NAME;
        adAppClientSecret = process.env.ADE_ADAPP_SECRET;
        adServicePrincipalAppId = process.env.ADE_ADSP_APPID;

        // key vault
        diskEncryptionKeyVaultId = process.env.ADE_KV_ID;
        diskEncryptionKeyVaultUrl = process.env.ADE_KV_URL;

        if (!suite.isPlayback()) {
          setupPrerequisites(done);
        } else {
          done();
        }
      });
    });

    after(function (done) {
      suite.teardownSuite(function () {
        if (!suite.isPlayback()) {
          cleanupCreatedArtifacts(done);
        } else {
          done();
        }
      });
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    function setupPrerequisites(done) {
      // create temporary resource group for test 
      suite.execute('group create --name %s --location %s --json', groupName, testLocation, function (result) {
        result.exitStatus.should.equal(0);
        // quick create vm within the resource group 
        suite.execute('vm quick-create -vv --resource-group %s --name %s --admin-username %s --location %s --os-type Linux --image-urn %s --ssh-publickey-file %s', groupName, vmName, adminUsername, testLocation, imageUrn, sshPublicKeyFile, function (result) {
          result.exitStatus.should.equal(0);
          // get id of nic from newly created vm 
          suite.execute('vm show --resource-group %s --name %s --json', groupName, vmName, function (result) {
            result.exitStatus.should.equal(0);
            vm = JSON.parse(result.text);
            nicName = vm.networkProfile.networkInterfaces[0].id.split('/').pop();          
            // prepare parameters required to create nsg via template 
            var nsgName = groupName + "NSG";
            var depName = nsgName + "Dep"
            var nsgTemplateParams = {
              "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
              "contentVersion": "1.0.0.0",
              "parameters": {
                  "networkSecurityGroupName": {
                      "value": nsgName
                  },
                  "location": {
                      "value": testLocation
                  }
              }
            }
            nsgParamString = JSON.stringify(nsgTemplateParams).replace(/\"/g,"'");
            // create nsg via template 
            suite.execute('group deployment create --resource-group %s --name %s --template-uri %s --parameters "%s"', groupName, depName, nsgTemplateUri, nsgParamString, function (result) {   
              result.exitStatus.should.equal(0);
              // associate nic of VM with newly created NSG   
              suite.execute('network nic set --resource-group %s --name %s --network-security-group-name %s --json', groupName, nicName, nsgName, function (result) {
                result.exitStatus.should.equal(0);
                done();
              });
            });
          });
        });
      });
    }

    function cleanupCreatedArtifacts(done) {
      suite.execute('group delete --name %s --quiet --json', groupName, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    }

    describe('vm', function () {
      it('should enable encryption on the vm', function (done) {
        var cmd = util.format('vm enable-disk-encryption --resource-group %s --name %s --aad-client-id %s --aad-client-secret %s --disk-encryption-key-vault-url %s --disk-encryption-key-vault-id %s --volume-type All --quiet --json', groupName, vmName, adServicePrincipalAppId, adAppClientSecret, diskEncryptionKeyVaultUrl, diskEncryptionKeyVaultId).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
    });

  });
});