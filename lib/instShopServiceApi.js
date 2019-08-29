module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize shop service api.'
    )
  }

  // Shop resource
  function createShop(payload) {
    return serviceClient.post(`/shops`, { data: payload })
  }

  function getShops(parameters = {}) {
    return serviceClient.get(`/shops`, { params: parameters })
  }

  function getShopById(shopId) {
    return serviceClient.get(`/shops/${shopId}`)
  }

  function updateShopById(shopId, payload) {
    return serviceClient.patch(`/shops/${shopId}`, {
      data: payload
    })
  }

  function deleteShopById(shopId) {
    return serviceClient.delete(`/shops/${shopId}`)
  }

  // Product resource
  function getProducts(shopId, parameters = {}) {
    return serviceClient.get(`/shops/${shopId}/products`, {
      params: parameters
    })
  }

  function getProductById(shopId, productId) {
    return serviceClient.get(`/shops/${shopId}/products/${productId}`)
  }

  // Discount code resource
  function createDiscountCode(shopId, payload) {
    return serviceClient.post(`/shops/${shopId}/discount-codes`, {
      data: payload
    })
  }

  function getDiscountCodeById(shopId, discountCodeId) {
    return serviceClient.get(
      `/shops/${shopId}/discount-codes/${discountCodeId}`
    )
  }

  function replaceDiscountCodeById(shopId, discountCodeId, payload) {
    return serviceClient.put(
      `/shops/${shopId}/discount-codes/${discountCodeId}`,
      { data: payload }
    )
  }

  function deleteDiscountCodeById(shopId, discountCodeId) {
    return serviceClient.delete(
      `/shops/${shopId}/discount-codes/${discountCodeId}`
    )
  }

  // Order resource
  function getOrders(shopId, parameters = {}) {
    return serviceClient.get(`/shops/${shopId}/orders`, {
      params: parameters
    })
  }

  function getOrderById(shopId, orderId) {
    return serviceClient.get(`/shops/${shopId}/orders/${orderId}`)
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
