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
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:49:49.7985797Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bb7336c3-48a2-4a78-822e-7cfa29ad47f8',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '2ef2a68d-ac99-48f6-862d-2c4b4ecb261e',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235023Z:2ef2a68d-ac99-48f6-862d-2c4b4ecb261e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:49:49.7985797Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'bb7336c3-48a2-4a78-822e-7cfa29ad47f8',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '2ef2a68d-ac99-48f6-862d-2c4b4ecb261e',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235023Z:2ef2a68d-ac99-48f6-862d-2c4b4ecb261e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:49:49.7985797Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1647',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '741ef70c-8082-44c2-98cb-1bdc57dd43fa',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b6351138-573b-4be7-ae96-546cfc5955fb',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235024Z:b6351138-573b-4be7-ae96-546cfc5955fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2016-11-01')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"adlacliacct01.azuredatalakeanalytics.net\",\"accountId\":\"76c63dae-2642-4d4f-badb-83f89f87acd5\",\"creationTime\":\"2017-03-13T22:14:00.1740232Z\",\"lastModifiedTime\":\"2017-03-13T22:14:00.1740232Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/test-adla-job-mgmt_olik_/providers/Microsoft.DataLakeAnalytics/accounts/adlacliacct01\",\"name\":\"adlacliacct01\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:49:49.7985797Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8046.azuredatalakeanalytics.net\",\"accountId\":\"5a80e563-55fb-46d7-9e53-87b3ac2e5192\",\"creationTime\":\"2017-03-13T23:49:16.806352Z\",\"lastModifiedTime\":\"2017-03-13T23:49:16.806352Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8046\",\"name\":\"xplattestadla8046\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1647',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '741ef70c-8082-44c2-98cb-1bdc57dd43fa',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b6351138-573b-4be7-ae96-546cfc5955fb',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235024Z:b6351138-573b-4be7-ae96-546cfc5955fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:49:49.7985797Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9d3a6baf-d90d-45f0-b2f4-b0f3c2da0188',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'acec26ac-37c3-4f39-8832-5ab22e91c7ba',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235025Z:acec26ac-37c3-4f39-8832-5ab22e91c7ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls2718\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2718\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":250,\"systemMaxJobCount\":20,\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4341.azuredatalakeanalytics.net\",\"accountId\":\"606e4cbf-5d5a-4802-be5a-3f839e02e2fe\",\"creationTime\":\"2017-03-13T23:49:49.7985797Z\",\"lastModifiedTime\":\"2017-03-13T23:49:49.7985797Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4341\",\"name\":\"xplattestadla4341\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '998',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9d3a6baf-d90d-45f0-b2f4-b0f3c2da0188',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'acec26ac-37c3-4f39-8832-5ab22e91c7ba',
  'x-ms-routing-request-id': 'WESTUS2:20170313T235025Z:acec26ac-37c3-4f39-8832-5ab22e91c7ba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 13 Mar 2017 23:50:24 GMT',
  connection: 'close' });
 return result; }]];