const instServiceClient = require('./instServiceClient.js')
const instShopServiceApi = require('./instShopServiceApi.js')
const instMyBusinessServiceApi = require('./instMyBusinessServiceApi.js')
const instConnectedShopServiceApi = require('./instConnectedShopServiceApi.js')

function instServiceApis(serviceClient) {
  return {
    shopServiceApi: instShopServiceApi(serviceClient),
    myBusinessServiceApi: instMyBusinessServiceApi(serviceClient),
    connectedShopServiceApi: instConnectedShopServiceApi(serviceClient)
  }
}

module.exports = {
  instServiceClient,
  instServiceApis,
  instShopServiceApi,
  instMyBusinessServiceApi,
  instConnectedShopServiceApi
}
