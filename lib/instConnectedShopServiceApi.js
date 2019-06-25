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
  function getConnectedShops(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${brandId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyConnectedShops(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/my/brands/${brandId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyConnectedShopById(brandId, shopId) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/my/brands/${brandId}/shops/${shopId}`
    )
  }

  // Product listing resource
  function getProductListings(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${brandId}/product-listings`,
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
