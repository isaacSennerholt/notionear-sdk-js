module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize shop service api.'
    )
  }

  const serviceIdentifier = 'f13f'
  const shopServicePath = `/${serviceIdentifier}/rest`

  // Shop resource
  function createShop(payload) {
    return serviceClient.post(`${shopServicePath}/shops`, { data: payload })
  }

  function getShops(parameters = {}) {
    return serviceClient.get(`${shopServicePath}/shops`, { params: parameters })
  }

  function getShopById(shopId) {
    return serviceClient.get(`${shopServicePath}/shops/${shopId}`)
  }

  function updateShopById(shopId, payload) {
    return serviceClient.patch(`${shopServicePath}/shops/${shopId}`, {
      data: payload
    })
  }

  function deleteShopById(shopId) {
    return serviceClient.delete(`${shopServicePath}/shops/${shopId}`)
  }

  // Product resource
  function getProducts(shopId, parameters = {}) {
    return serviceClient.get(`${shopServicePath}/shops/${shopId}/products`, {
      params: parameters
    })
  }

  function getProductById(shopId, productId) {
    return serviceClient.get(
      `${shopServicePath}/shops/${shopId}/products/${productId}`
    )
  }

  // Discount code resource
  function createDiscountCode(shopId, payload) {
    return serviceClient.post(
      `${shopServicePath}/shops/${shopId}/discount-codes`,
      {
        data: payload
      }
    )
  }

  function getDiscountCodeById(shopId, discountCodeId) {
    return serviceClient.get(
      `${shopServicePath}/shops/${shopId}/discount-codes/${discountCodeId}`
    )
  }

  function replaceDiscountCodeById(shopId, discountCodeId, payload) {
    return serviceClient.put(
      `${shopServicePath}/shops/${shopId}/discount-codes/${discountCodeId}`,
      { data: payload }
    )
  }

  function deleteDiscountCodeById(shopId, discountCodeId) {
    return serviceClient.delete(
      `${shopServicePath}/shops/${shopId}/discount-codes/${discountCodeId}`
    )
  }

  // Order resource
  function getOrders(shopId, parameters = {}) {
    return serviceClient.get(`${shopServicePath}/shops/${shopId}/orders`, {
      params: parameters
    })
  }

  function getOrderById(shopId, orderId) {
    return serviceClient.get(
      `${shopServicePath}/shops/${shopId}/orders/${orderId}`
    )
  }

  return {
    createShop,
    getShops,
    getShopById,
    updateShopById,
    deleteShopById,
    getProducts,
    getProductById,
    createDiscountCode,
    getDiscountCodeById,
    replaceDiscountCodeById,
    deleteDiscountCodeById,
    getOrders,
    getOrderById
  }
}
