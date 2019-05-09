const instServiceClient = require('./instServiceClient.js')
const instShopServiceApi = require('./instShopServiceApi.js')

module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize sdk.'
    )
  }

  const shopServiceApi = instShopServiceApi(serviceClient)

  return {
    instServiceClient,
    shopServiceApi
  }
}
