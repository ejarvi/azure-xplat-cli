// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'fb2c25dc-6bab-45c4-8cc9-cece7c42a95a',
    name: 'antps14',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg18479/providers/Microsoft.Web/serverFarms/appservicepplanclitest8116?api-version=2014-06-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg18479/providers/Microsoft.Web/serverfarms/appservicepplanclitest8116\",\"name\":\"appservicepplanclitest8116\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"appservicepplanclitest8116\",\"sku\":\"Standard\",\"reserved\":false,\"workerSize\":2,\"workerSizeId\":2,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":2,\"currentWorkerSizeId\":2,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg18479-WestUSwebspace\",\"subscription\":\"fb2c25dc-6bab-45c4-8cc9-cece7c42a95a\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":10,\"planName\":\"VirtualDedicatedPlan\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"lastModifiedTimeUtc\":\"2016-08-24T16:15:40.047Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '863',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe563eea-e1a1-4f40-8df2-ff2b39d36c41',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14928',
  'x-ms-correlation-request-id': '9c76a576-3662-4b6f-9b0b-e8f38d0d7289',
  'x-ms-routing-request-id': 'CENTRALUS:20160824T161552Z:9c76a576-3662-4b6f-9b0b-e8f38d0d7289',
  date: 'Wed, 24 Aug 2016 16:15:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg18479/providers/Microsoft.Web/serverFarms/appservicepplanclitest8116?api-version=2014-06-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg18479/providers/Microsoft.Web/serverfarms/appservicepplanclitest8116\",\"name\":\"appservicepplanclitest8116\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"appservicepplanclitest8116\",\"sku\":\"Standard\",\"reserved\":false,\"workerSize\":2,\"workerSizeId\":2,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":2,\"currentWorkerSizeId\":2,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg18479-WestUSwebspace\",\"subscription\":\"fb2c25dc-6bab-45c4-8cc9-cece7c42a95a\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":10,\"planName\":\"VirtualDedicatedPlan\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"lastModifiedTimeUtc\":\"2016-08-24T16:15:40.047Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '863',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe563eea-e1a1-4f40-8df2-ff2b39d36c41',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14928',
  'x-ms-correlation-request-id': '9c76a576-3662-4b6f-9b0b-e8f38d0d7289',
  'x-ms-routing-request-id': 'CENTRALUS:20160824T161552Z:9c76a576-3662-4b6f-9b0b-e8f38d0d7289',
  date: 'Wed, 24 Aug 2016 16:15:51 GMT',
  connection: 'close' });
 return result; }]];