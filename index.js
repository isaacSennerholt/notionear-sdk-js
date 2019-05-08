const createServiceClient = require('./createServiceClient.js')
const shopService = require('./shopService.js')

module.exports = function(serviceClient) {
  if (!serviceClient)
    throw new Error(
      'A configured service client is required to initialize sdk.'
    )

  const shopService = shopService(serviceClient)

  return {
    createServiceClient,
    shopService
  }
}
