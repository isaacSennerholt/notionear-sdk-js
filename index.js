const instServiceClient = require('./instServiceClient.js')
const instShopServiceApi = require('./instShopServiceApi.js')

function instServiceApis(serviceClient) {
  return {
    shopServiceApi: instShopServiceApi(serviceClient)
  }
}

module.exports = {
  instServiceClient,
  instServiceApis,
  instShopServiceApi
}