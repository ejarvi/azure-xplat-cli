// This file has been autogenerated.

var profile = require('../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
      id : 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
      name : 'CollaberaInteropTest',
      username : 'user@domain.example',
      registeredProviders : ['sqlserver', 'sqlserver', 'website', 'website'],
      registeredResourceNamespaces : [],
      isDefault : true
    }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function () {}

exports.scopes = [[function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/locations')
        .reply(200, "<Locations xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Location><Name>South Central US</Name><DisplayName>South Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>Central US</Name><DisplayName>Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>East US 2</Name><DisplayName>East US 2</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>East US</Name><DisplayName>East US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>West US</Name><DisplayName>West US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>North Central US</Name><DisplayName>North Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>North Europe</Name><DisplayName>North Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>West Europe</Name><DisplayName>West Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>East Asia</Name><DisplayName>East Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>Southeast Asia</Name><DisplayName>Southeast Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>Japan West</Name><DisplayName>Japan West</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>Japan East</Name><DisplayName>Japan East</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location><Location><Name>Brazil South</Name><DisplayName>Brazil South</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></Location></Locations>", {
          'cache-control' : 'no-cache',
          'content-length' : '13925',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.110 (rd_rdfe_stable.140729-1337) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth2',
          'x-ms-request-id' : '4d6294c8fe7bc686a6af2de85844b848',
          date : 'Fri, 08 Aug 2014 10:01:30 GMT'
        });
      return result;
    }
  ],
  [function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/XplattestVm</Url><ServiceName>XplattestVm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Y2xpdGVzdHZtMQ==</Label><Status>Created</Status><DateCreated>2014-08-08T06:02:00Z</DateCreated><DateLastModified>2014-08-08T06:02:21Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>XplattestVm</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '20412',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.110 (rd_rdfe_stable.140729-1337) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth2',
          'x-ms-request-id' : 'c9a2ff573d19cef6a661c0c502347819',
          date : 'Fri, 08 Aug 2014 06:05:40 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/XplattestVm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>XplattestVm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>878ec9e8fed343ec89ce4ecaaa277e16</PrivateID><Status>Running</Status><Label>WTJ4cGRHVnpkSFp0TVE9PQ==</Label><Url>http://XplattestVm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm0xIj4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>XplattestVm</RoleName><InstanceName>XplattestVm</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.74.174.49</IpAddress><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2014-08-08T06:05:52Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role XplattestVm.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>XplattestVm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>XplattestVm-XplattestVm-0-201408080602150229</DiskName><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/XplattestVm-4c71828a98e94788.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2014-08-08T06:02:09Z</CreatedTime><LastModifiedTime>2014-08-08T06:05:51Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2014-06-21T06:23:38Z</StartTime><EndTime>2014-06-23T06:23:38Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>104.40.4.188</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>XplattestVm.d2.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", {
          'cache-control' : 'no-cache',
          'content-length' : '2931',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.110 (rd_rdfe_stable.140729-1337) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth2',
          'x-ms-request-id' : 'f62d4c04544cc6448193d7d577bca0b8',
          date : 'Fri, 08 Aug 2014 06:05:59 GMT'
        });
      return result;
    },function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/XplattestVm</Url><ServiceName>XplattestVm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Y2xpdGVzdHZtMQ==</Label><Status>Created</Status><DateCreated>2014-08-08T06:02:00Z</DateCreated><DateLastModified>2014-08-08T06:02:21Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>XplattestVm</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", {
          'cache-control' : 'no-cache',
          'content-length' : '20412',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.110 (rd_rdfe_stable.140729-1337) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth2',
          'x-ms-request-id' : 'c9a2ff573d19cef6a661c0c502347819',
          date : 'Fri, 08 Aug 2014 06:05:40 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/XplattestVm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>XplattestVm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>878ec9e8fed343ec89ce4ecaaa277e16</PrivateID><Status>Running</Status><Label>WTJ4cGRHVnpkSFp0TVE9PQ==</Label><Url>http://XplattestVm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm0xIj4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>XplattestVm</RoleName><InstanceName>XplattestVm</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.74.174.49</IpAddress><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2014-08-08T06:05:52Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role XplattestVm.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>XplattestVm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>XplattestVm-XplattestVm-0-201408080602150229</DiskName><MediaLink>https://acsforsdk2.blob.core.windows.net/vhd-store/XplattestVm-4c71828a98e94788.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2014-08-08T06:02:09Z</CreatedTime><LastModifiedTime>2014-08-08T06:05:51Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2014-06-21T06:23:38Z</StartTime><EndTime>2014-06-23T06:23:38Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>104.40.4.188</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>XplattestVm.d2.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", {
          'cache-control' : 'no-cache',
          'content-length' : '2931',
          'content-type' : 'application/xml; charset=utf-8',
          server : '1.0.6198.110 (rd_rdfe_stable.140729-1337) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion' : 'ussouth2',
          'x-ms-request-id' : 'f62d4c04544cc6448193d7d577bca0b8',
          date : 'Fri, 08 Aug 2014 06:05:59 GMT'
        });
      return result;
    }
  ]];