// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    name: 'Visual Studio Ultimate with MSDN',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls6257/listKeys?api-version=2016-12-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"ZTGTBHWvj02gpuQFbXn5aBulB7PeKPhC7d/NDjsFsSwDvvklaMDEdaPyx1Q4FS8RFtfY7+zUD57SIqSAW4POGg==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"OiwU8UBUqUuH80yRIUiM6MUzAxdAJQVCZWwvi7ULNvArfhr9DnvtLQWG1nW26DLB95RXVV4brPxCcvcEsrkJWQ==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '854cc9cc-8b56-4bb0-8628-262c9f496947',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '854cc9cc-8b56-4bb0-8628-262c9f496947',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235038Z:854cc9cc-8b56-4bb0-8628-262c9f496947',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls6257/listKeys?api-version=2016-12-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"ZTGTBHWvj02gpuQFbXn5aBulB7PeKPhC7d/NDjsFsSwDvvklaMDEdaPyx1Q4FS8RFtfY7+zUD57SIqSAW4POGg==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"OiwU8UBUqUuH80yRIUiM6MUzAxdAJQVCZWwvi7ULNvArfhr9DnvtLQWG1nW26DLB95RXVV4brPxCcvcEsrkJWQ==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '854cc9cc-8b56-4bb0-8628-262c9f496947',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '854cc9cc-8b56-4bb0-8628-262c9f496947',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235038Z:854cc9cc-8b56-4bb0-8628-262c9f496947',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b4c6117f-a70b-458b-9842-e59d637b9bf5',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '601dd29a-8881-4fc8-bc72-6d286af25af1',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235039Z:601dd29a-8881-4fc8-bc72-6d286af25af1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b4c6117f-a70b-458b-9842-e59d637b9bf5',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '601dd29a-8881-4fc8-bc72-6d286af25af1',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235039Z:601dd29a-8881-4fc8-bc72-6d286af25af1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341/StorageAccounts/xplattestadls6257?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341/storageAccounts/xplattestadls6257\",\"name\":\"xplattestadls6257\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4d228eb1-c917-4d23-95a3-e798f2badee7',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '226793da-4244-4b4d-a431-03dc51be1107',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235041Z:226793da-4244-4b4d-a431-03dc51be1107',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341/StorageAccounts/xplattestadls6257?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341/storageAccounts/xplattestadls6257\",\"name\":\"xplattestadls6257\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4d228eb1-c917-4d23-95a3-e798f2badee7',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '226793da-4244-4b4d-a431-03dc51be1107',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235041Z:226793da-4244-4b4d-a431-03dc51be1107',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '93c11981-59c8-4ebc-a284-773f5ec5787e',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'bd37e4f6-3a08-471e-af6e-2c78f6c16cad',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235042Z:bd37e4f6-3a08-471e-af6e-2c78f6c16cad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '93c11981-59c8-4ebc-a284-773f5ec5787e',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'bd37e4f6-3a08-471e-af6e-2c78f6c16cad',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235042Z:bd37e4f6-3a08-471e-af6e-2c78f6c16cad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls6257\"}],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1093',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b2287383-0ee3-4d34-8123-7479e35a1d63',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '27cddcaf-8bb2-4288-8e20-a864f00569ba',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235042Z:27cddcaf-8bb2-4288-8e20-a864f00569ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls6257\"}],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1093',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b2287383-0ee3-4d34-8123-7479e35a1d63',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '27cddcaf-8bb2-4288-8e20-a864f00569ba',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235042Z:27cddcaf-8bb2-4288-8e20-a864f00569ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2772bd7c-c09a-4990-bd1c-4b6c08ab1430',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '60e81263-235a-4828-82a0-bca1341e0a06',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235043Z:60e81263-235a-4828-82a0-bca1341e0a06',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2772bd7c-c09a-4990-bd1c-4b6c08ab1430',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '60e81263-235a-4828-82a0-bca1341e0a06',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235043Z:60e81263-235a-4828-82a0-bca1341e0a06',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341/StorageAccounts/xplattestadls6257?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '5a8866db-f60c-4d0a-b631-f70748f69f2e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '2483cdef-6d0d-4d69-869f-2e20ec11ab8a',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235044Z:2483cdef-6d0d-4d69-869f-2e20ec11ab8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341/StorageAccounts/xplattestadls6257?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '5a8866db-f60c-4d0a-b631-f70748f69f2e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '2483cdef-6d0d-4d69-869f-2e20ec11ab8a',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235044Z:2483cdef-6d0d-4d69-869f-2e20ec11ab8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ecabbc43-f929-4462-8ab2-9e5ee2e87393',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '0b40bc2b-09d8-4979-b44d-d035b5f858e9',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235045Z:0b40bc2b-09d8-4979-b44d-d035b5f858e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1671',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'ecabbc43-f929-4462-8ab2-9e5ee2e87393',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '0b40bc2b-09d8-4979-b44d-d035b5f858e9',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235045Z:0b40bc2b-09d8-4979-b44d-d035b5f858e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1022',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '45df4b6f-0aae-4bf2-90fe-7010a468675a',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '91be858d-0bbe-4c2d-9f22-cd5299d13d9f',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235045Z:91be858d-0bbe-4c2d-9f22-cd5299d13d9f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:50:30.0456143Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1022',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '45df4b6f-0aae-4bf2-90fe-7010a468675a',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '91be858d-0bbe-4c2d-9f22-cd5299d13d9f',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235045Z:91be858d-0bbe-4c2d-9f22-cd5299d13d9f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:45 GMT',
  connection: 'close' });
 return result; }]];