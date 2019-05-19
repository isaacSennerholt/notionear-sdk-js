const instServiceClient = require('./instServiceClient.js')
const instShopServiceApi = require('./instShopServiceApi.js')
const instMyBusinessServiceApi = require('./instMyBusinessServiceApi.js')
const instConnectedShopServiceApi = require('./instConnectedShopServiceApi.js')
const instProductListingServiceApi = require('./instProductListingServiceApi.js')
const instPartnershipServiceApi = require('./instPartnershipServiceApi.js')

function instServiceApis(serviceClient) {
  return {
    shopServiceApi: instShopServiceApi(serviceClient),
    myBusinessServiceApi: instMyBusinessServiceApi(serviceClient),
    connectedShopServiceApi: instConnectedShopServiceApi(serviceClient),
    productListingServiceApi: instProductListingServiceApi(serviceClient),
    partnershipServiceApi: instPartnershipServiceApi(serviceClient)
  }
}

module.exports = {
  instServiceClient,
  instServiceApis,
  instShopServiceApi,
  instMyBusinessServiceApi,
  instConnectedShopServiceApi,
  instProductListingServiceApi,
  instPartnershipServiceApi
}
