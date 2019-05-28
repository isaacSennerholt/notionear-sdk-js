module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize connected shop service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = 'a4f2'
  const connectedShopServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // Connected shop resource
  function getConnectedShops(businessId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${businessId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyConnectedShops(businessId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/my/brands/${businessId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyConnectedShopById(businessId, shopId) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/my/brands/${businessId}/shops/${shopId}`
    )
  }

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
    getConnectedShops,
    getMyConnectedShops,
    getMyConnectedShopById,
    getProductListings
  }
}