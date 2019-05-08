module.exports = function(serviceClient) {
  const shopServiceUrl = `${baseUrl}/f13f/rest`

  // Shop resource
  function createShop(payload) {
    return serviceClient.post(`${shopServiceUrl}/shops`, { data: payload })
  }

  function getShops(parameters = {}) {
    return serviceClient.get(`${shopServiceUrl}/shops`, { params: parameters })
  }

  function getShopById(shopId) {
    return serviceClient.get(`${shopServiceUrl}/shops/${shopId}`)
  }

  function updateShopById(shopId, payload) {
    return serviceClient.patch(`${shopServiceUrl}/shops/${shopId}`, {
      data: payload
    })
  }

  function deleteShopById(shopId) {
    return serviceClient.delete(`${shopServiceUrl}/shops/${shopId}`)
  }

  // Product resource
  function getProducts(shopId, parameters = {}) {
    return serviceClient.get(`${shopServiceUrl}/shops/${shopId}/products`, {
      params: parameters
    })
  }

  function getProductById(shopId, productId) {
    return serviceClient.get(
      `${shopServiceUrl}/shops/${shopId}/products/${productId}`
    )
  }

  // Discount code resource
  function createDiscountCode(shopId, payload) {
    return serviceClient.post(
      `${shopServiceUrl}/shops/${shopId}/discount-codes`,
      { data: payload }
    )
  }

  function getDiscountCodeById(shopId, discountCodeId) {
    return serviceClient.get(
      `${shopServiceUrl}/shops/${shopId}/discount-codes/${discountCodeId}`
    )
  }

  // Order resource
  function getOrders(shopId, parameters = {}) {
    return serviceClient.get(`${shopServiceUrl}/shops/${shopId}/orders`, {
      params: parameters
    })
  }

  function getOrderById(shopId, orderId) {
    return serviceClient.get(
      `${shopServiceUrl}/shops/${shopId}/orders/${orderId}`
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
    getOrders,
    getOrderById
  }
}
