module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize connected shop service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = 'a4f2'
  const connectedShopServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest/my`

  // Connected shop resource
  function getConnectedShops(parameters = {}) {
    return serviceClient.get(`${connectedShopServiceUrl}/shops`, {
      params: parameters
    })
  }

  return {
    getConnectedShops
  }
}
