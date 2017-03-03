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
  defaultValue: 'xplatTestAdApp'
}, {
  name: 'ADE_ADAPP_SECRET',
  defaultValue: ''
}, {
  name: 'ADE_ADSP_APPID',
  defaultValue: ''
}, {
  name: 'ADE_ADSP_OID',
  defaultValue: ''
}, {
  name: 'SSHCERT',
  defaultValue: 'test/myCert.pem'
}];

var testprefix = 'arm-cli-vm-disk-encryption-linux';
  groupPrefix = 'xplatTestRG',
  groupName,
  vmPrefix = 'xplatTestVM',
  vmName,
  adminUserPrefix = 'xptadmin',
  adminUsername,
  imageUrn = 'Ubuntu-LTS:latest',
  vaultName = 'xplatTestKV',

  adAppName,
  adAppClientSecret,
  adServicePrincipalAppId,
  adServicePrincipalObjectID,

  subscriptionId,
  diskEncryptionKeyVaultId,
  diskEncryptionKeyVaultUrl,
  sshPublicKeyFile;

describe('arm', function () {
  describe('compute', function () {
    var suite, retry = 5;
    var vmTest = new VMTestUtil();
    before(function (done) {
      this.timeout(vmTest.timeoutLarge);
      suite = new CLITest(this, testprefix, requiredEnvironment);
      suite.setupSuite(function () {
        // resource group and virtual machine 
        location = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.generateId(groupPrefix, null);
        vmName = suite.isMocked ? vmName : suite.generateId(vmPrefix, null);
        adminUsername = suite.GenerateId(adminUserPrefix, null);
        sshPublicKeyFile = process.env.SSHCERT;

        // active directory (precreated to facilitate automation from service principal context)
        adAppName = process.env.ADE_ADAPP_NAME,
          adAppClientSecret = process.env.ADE_ADAPP_SECRET,
          adServicePrincipalAppId = process.env.ADE_ADSP_APPID,
          adServicePrincipalObjectID = process.env.ADE_ADSP_OID,

          // key vault
          vaultName = suite.isMocked ? vaultName : suite.generateId(vaultName, null);

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
      suite.execute('group create -n %s -l %s --json', groupName, location, function (result) {
        result.exitStatus.should.equal(0);
        // quick create vm within the resource group 
        suite.execute('vm quick-create --resource-group "%s" --name "%s" --admin-username "%s" --location "%s" --os-type Linux --image-urn "%s" --ssh-public-key-file "%s"', groupName, vmName, adminUsername, location, imageUrn, sshPublicKeyFile, function (result) {
          result.exitStatus.should.equal(0);
          // create keyvault 
          suite.execute('keyvault create --vault-name "%s" --resource-group "%s" --location "%s" --json', vaultName, groupName, location, function (result) {
            result.exitStatus.should.equal(0);
            var kvResources = JSON.parse(result.text);
            diskEncryptionKeyVaultId = kvResources.id;
            diskEncryptionKeyVaultUrl = kvResources.properties.vaultUri;
            // set keyvault policy to enable disk encryption 
            suite.execute('keyvault set-policy --vault-name "%s" --spn "%s" --perms-to-keys ["wrapKey"] --perms-to-secrets ["set"] --enabled-for-disk-encryption true --json', vaultName, adServicePrincipalAppId, function (result) {
              result.exitStatus.should.equal(0);
              done();
            });
          });
        });
      });
    }

    function cleanupCreatedArtifacts(done) {
      suite.execute('keyvault delete --vault-name "%s" --quiet --json', vaultName, function (result) {
        result.exitStatus.should.equal(0);
        suite.execute('group delete --name "%s" --quiet --json', groupName, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
    }

    describe('vm', function () {
      it('should enable encryption on the vm', function (done) {
        var cmd = util.format('vm enable-disk-encryption --resource-group "%s" --name "%s" --aad-client-id "%s" --aad-client-secret "%s" --disk-encryption-key-vault-url "%s" --disk-encryption-key-vault-id "%s" --quiet --json', groupName, vmName, adServicePrincipalAppId, adAppClientSecret, diskEncryptionKeyVaultUrl, diskEncryptionKeyVaultId).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          done();
        });
      });
    });

  });
});
