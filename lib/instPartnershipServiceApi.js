module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize partnership service api.'
    )
  }

  const serviceIdentifier = 'b198'
  const partnershipServicePath = `/${serviceIdentifier}/rest`

  // Business partnership resource
  function getMyBusinessPartnerships(businessId, parameters = {}) {
    return serviceClient.get(
      `${partnershipServicePath}/my/businesses/${businessId}/partnerships`,
      {
        params: parameters
      }
    )
  }

  function getMyBusinessPartnershipById(businessId, partnershipId) {
    return serviceClient.get(
      `${partnershipServicePath}/my/businesses/${businessId}/partnerships/${partnershipId}`
    )
  }

  return {
    getMyBusinessPartnerships,
    getMyBusinessPartnershipById
  }
}
