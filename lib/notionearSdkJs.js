const instServiceClient = require('./instServiceClient.js')
const instShopServiceApi = require('./instShopServiceApi.js')
const instMyBusinessServiceApi = require('./instMyBusinessServiceApi.js')

function instServiceApis(serviceClient) {
  return {
    shopServiceApi: instShopServiceApi(serviceClient),
    myBusinessServiceApi: instMyBusinessServiceApi(serviceClient)
  }
}

module.exports = {
  instServiceClient,
  instServiceApis,
  instShopServiceApi,
  instMyBusinessServiceApi
}
