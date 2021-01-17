module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize promotion service api.'
    )
  }

  const serviceIdentifier = '2c2c'
  const promotionServicePath = `/${serviceIdentifier}/rest`

  // Business promotion resource
  function getMyBusinessPromotions(businessId, parameters = {}) {
    return serviceClient.get(
      `${promotionServicePath}/my/businesses/${businessId}/promotions`,
      {
        params: parameters
      }
    )
  }

  return {
    getMyBusinessPromotions
  }
}
