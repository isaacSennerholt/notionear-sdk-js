module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize product listing service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = '15b9'
  const connectedShopServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // Product listing resource
  function getProductListings(businessId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${businessId}/product-listings`,
      {
        params: parameters
      }
    )
  }

  return {
    getProductListings
  }
}
