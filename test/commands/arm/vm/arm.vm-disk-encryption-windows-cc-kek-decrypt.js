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
  name: 'ADE_KV_ID',
  defaultValue: ''
}, {
  name: 'ADE_KV_URL',
  defaultValue: ''
}, { 
  name : 'ADE_KEK_URL',
  defaultValue: ''
}, { 
  name: 'ADE_KV_CERT_SID',
  defaultValue: ''
}, { 
  name: 'ADE_KV_CERT_THUMB',
  defaultValue: ''
}];

var testLocation,
  testprefix = 'arm-cli-vm-disk-encryption-windows-cc-kek-decrypt',
  groupPrefix = 'xplatTestRG',
  groupName,
  vmPrefix = 'xplatTestVM',
  vmName,
  adminUserPrefix = 'xptadmin',
  adminUsername,
  adminPassword,
  imageUrn = 'MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:latest',

  adAppName,
  adAppClientSecret,
  adServicePrincipalAppId,

  subscriptionId,
  clientCertificateUrl,
  clientCertificateThumbprint,
  keyEncryptionKeyUrl,
  keyEncryptionKeyVaultId,
  diskEncryptionKeyVaultId,
  diskEncryptionKeyVaultUrl;

describe('arm', function () {
  describe('compute', function () {
    var suite, retry = 5;
    var vmTest = new VMTestUtil();
    before(function (done) {
      this.timeout(vmTest.timeoutLarge * 100);
      suite = new CLITest(this, testprefix, requiredEnvironment);
      suite.setupSuite(function () {
        // resource group and virtual machine 
        subscriptionId = profile.current.getSubscription().id;
        testLocation = process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.generateId(groupPrefix, null);
        vmName = suite.isMocked ? vmName : suite.generateId(vmPrefix, null);
        adminUsername = suite.generateId(adminUserPrefix, null);
        adminPassword = 'aA1^' + Math.random().toString(36).slice(-14);

        // active directory (precreated to facilitate automation from service principal context)
        adAppName = process.env.ADE_ADAPP_NAME;
        adAppClientSecret = process.env.ADE_ADAPP_SECRET;
        adServicePrincipalAppId = process.env.ADE_ADSP_APPID;

        // key vault 
        clientCertificateUrl = process.env.ADE_KV_CERT_SID;
        clientCertificateThumbprint = process.env.ADE_KV_CERT_THUMB;
        keyEncryptionKeyUrl = ADE_KEK_URL;
        keyEncryptionKeyVaultId = process.env.ADE_KV_ID;
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
        done();
      });
    }

    function cleanupCreatedArtifacts(done) {
      suite.execute('group delete --name %s --quiet --json', groupName, function (result) {
        result.exitStatus.should.equal(0);
        done();
      });
    }

    describe('vm', function () {
      it('should VmQuickCreateWindows-EncryptUsingClientCertificate-GetStatusEncrypted-Decrypt', function (done) {
        this.timeout(vmTest.timeoutLarge * 10);
        // quick create windows vm
        var cmd = util.format('vm quick-create -vv --resource-group %s --name %s --admin-username %s --admin-password %s --location %s --os-type Windows --image-urn %s', groupName, vmName, adminUsername, adminPassword, testLocation, imageUrn).split(' ');
        testUtils.executeCommand(suite, retry, cmd, function(result) {
            result.exitStatus.should.equal(0);

            // deploy certificate to vm 
            var cmd = util.format('vm secret add --resource-group %s --name %s --source-vault-id %s --certificate-url %s --certificate-store My --subscription %s', groupName, vmName, diskEncryptionKeyVaultId, clientCertificateUrl, subscriptionId).split(' ');
            testUtils.executeCommand(suite, retry, cmd, function(result) {
                result.exitStatus.should.equal(0);

                // encrypt using client certificate and key encryption key
                var cmd = util.format('vm enable-disk-encryption --resource-group %s --name %s --aad-client-id %s --aad-client-cert-thumbprint %s --disk-encryption-key-vault-url %s --disk-encryption-key-vault-id %s --volume-type All --quiet --json', groupName, vmName, adServicePrincipalAppId, clientCertificateThumbprint, diskEncryptionKeyVaultUrl, diskEncryptionKeyVaultId).split(' ');
                testUtils.executeCommand(suite, retry, cmd, function(result) {
                    result.exitStatus.should.equal(0);

                    // get status encrypted
                    var cmd = util.format('vm show-disk-encryption-status --resource-group %s --name %s --subscription %s --json', groupName, vmName, subscriptionId).split(' ');
                    testUtils.executeCommand(suite, retry, cmd, function(result) {
                        result.exitStatus.should.equal(0);
                        should(result.text.toLowerCase().indexOf('encrypted') > -1).ok;
                    
                        // disable encryption
                        var cmd = util.format('vm disable-disk-encryption --resource-group %s --name %s --subscription %s --volume-type All --quiet --json', groupName, vmName, subscriptionId).split(' ');
                        testUtils.executeCommand(suite, retry, cmd, function(result) {
                            result.exitStatus.should.equal(0);      
                            done();
                        });
                    });
                });
            });
        });                   
      });
    });
  });
});
