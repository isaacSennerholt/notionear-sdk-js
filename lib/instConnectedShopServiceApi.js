module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize connected shop service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = 'a4f2'
  const connectedShopServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // Brand shop resource
  function getBrandShops(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${brandId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyBrandShops(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/my/brands/${brandId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyBrandShopById(brandId, shopId) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/my/brands/${brandId}/shops/${shopId}`
    )
  }

  function createMyBrandShop(brandId, payload) {
    return serviceClient.post(
      `${connectedShopServiceUrl}/my/brands/${brandId}/shops`,
      { data: payload }
    )
  }

  function updateMyBrandShopById(brandId, shopId, payload) {
    return serviceClient.patch(
      `${connectedShopServiceUrl}/my/brands/${brandId}/shops/${shopId}`,
      { data: payload }
    )
  }

  // Product listing resource
  function getBrandProductListings(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${brandId}/product-listings`,
      {
        params: parameters
      }
    )
  }

  function getProductListingById(brandId, productId) {
    return serviceClient.get(
      `${connectedShopServiceUrl}/v1/brands/${brandId}/product-listings/${productId}`
    )
  }

  return {
    getBrandShops,
    getMyBrandShops,
    getMyBrandShopById,
    createMyBrandShop,
    updateMyBrandShopById,
    getBrandProductListings,
    getProductListingById
  }
}
