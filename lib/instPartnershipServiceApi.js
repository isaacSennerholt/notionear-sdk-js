module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize partnership service api.'
    )
  }

  // Business partnership resource
  function getMyBusinessPartnerships(businessId, parameters = {}) {
    return serviceClient.get(`/my/businesses/${businessId}/partnerships`, {
      params: parameters
    })
  }

  function getMyBusinessPartnershipById(businessId, partnershipId) {
    return serviceClient.get(
      `/my/businesses/${businessId}/partnerships/${partnershipId}`
    )
  }

  return {
    getMyBusinessPartnerships,
    getMyBusinessPartnershipById
  }
}
