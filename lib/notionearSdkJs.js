const instServiceClient = require('./instServiceClient.js')
const instShopServiceApi = require('./instShopServiceApi.js')
const instMyBusinessServiceApi = require('./instMyBusinessServiceApi.js')
const instConnectedShopServiceApi = require('./instConnectedShopServiceApi.js')
const instPartnershipServiceApi = require('./instPartnershipServiceApi.js')
const instPartnerProgramServiceApi = require('./instPartnerProgramServiceApi.js')
const instUserServiceApi = require('./instUserServiceApi.js')
const instPromotionServiceApi = require('./instPromotionServiceApi.js')
const instPlanServiceApi = require('./instPlanServiceApi.js')

function instServiceApis(serviceClient) {
  return {
    shopServiceApi: instShopServiceApi(serviceClient),
    myBusinessServiceApi: instMyBusinessServiceApi(serviceClient),
    connectedShopServiceApi: instConnectedShopServiceApi(serviceClient),
    partnershipServiceApi: instPartnershipServiceApi(serviceClient),
    partnerProgramServiceApi: instPartnerProgramServiceApi(serviceClient),
    userServiceApi: instUserServiceApi(serviceClient),
    promotionServiceApi: instPromotionServiceApi(serviceClient),
    planServiceApi: instPlanServiceApi(serviceClient),
  }
}

module.exports = {
  instServiceClient,
  instServiceApis,
  instShopServiceApi,
  instMyBusinessServiceApi,
  instConnectedShopServiceApi,
  instPartnershipServiceApi,
  instPartnerProgramServiceApi,
  instUserServiceApi,
  instPromotionServiceApi,
  instPlanServiceApi
}
