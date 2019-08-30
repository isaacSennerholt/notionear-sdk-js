module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize connected shop service api.'
    )
  }

  const serviceIdentifier = 'a4f2'
  const connectedShopServicePath = `/${serviceIdentifier}/rest`

  // Brand shop resource
  function getBrandShops(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServicePath}/v1/brands/${brandId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyBrandShops(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServicePath}/my/brands/${brandId}/shops`,
      {
        params: parameters
      }
    )
  }

  function getMyBrandShopById(brandId, shopId) {
    return serviceClient.get(
      `${connectedShopServicePath}/my/brands/${brandId}/shops/${shopId}`
    )
  }

  function createMyBrandShop(brandId, payload) {
    return serviceClient.post(
      `${connectedShopServicePath}/my/brands/${brandId}/shops`,
      { data: payload }
    )
  }

  function updateMyBrandShopById(brandId, shopId, payload) {
    return serviceClient.patch(
      `${connectedShopServicePath}/my/brands/${brandId}/shops/${shopId}`,
      {
        data: payload
      }
    )
  }

  // Brand product listing resource
  function getBrandProductListings(brandId, parameters = {}) {
    return serviceClient.get(
      `${connectedShopServicePath}/v1/brands/${brandId}/product-listings`,
      {
        params: parameters
      }
    )
  }

  function getBrandProductListingById(brandId, productId) {
    return serviceClient.get(
      `${connectedShopServicePath}/v1/brands/${brandId}/product-listings/${productId}`
    )
  }

  return {
    getBrandShops,
    getMyBrandShops,
    getMyBrandShopById,
    createMyBrandShop,
    updateMyBrandShopById,
    getBrandProductListings,
    getBrandProductListingById
  }
}
