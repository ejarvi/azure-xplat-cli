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
  .post('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg14770/providers/Microsoft.Web/sites/webappclitest2894/stop?api-version=2014-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bfd310a2-52e3-4312-9bf3-3f676c5023e7',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5aa9fd8f-4d20-4546-85de-e5ba0f0d47ff',
  'x-ms-routing-request-id': 'CENTRALUS:20160824T063429Z:5aa9fd8f-4d20-4546-85de-e5ba0f0d47ff',
  date: 'Wed, 24 Aug 2016 06:34:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg14770/providers/Microsoft.Web/sites/webappclitest2894/stop?api-version=2014-06-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'bfd310a2-52e3-4312-9bf3-3f676c5023e7',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5aa9fd8f-4d20-4546-85de-e5ba0f0d47ff',
  'x-ms-routing-request-id': 'CENTRALUS:20160824T063429Z:5aa9fd8f-4d20-4546-85de-e5ba0f0d47ff',
  date: 'Wed, 24 Aug 2016 06:34:29 GMT',
  connection: 'close' });
 return result; }]];