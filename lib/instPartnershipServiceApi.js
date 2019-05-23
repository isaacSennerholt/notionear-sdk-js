module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize partnership service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = 'b198'
  const partnershipServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // Partnership resource
  function getMyPartnerships(businessId) {
    return serviceClient.get(
      `${partnershipServiceUrl}/my/businesses/${businessId}/partnerships`
    )
  }

  function getMyPartnershipById(businessId, partnershipId) {
    return serviceClient.get(
      `${partnershipServiceUrl}/my/businesses/${businessId}/partnerships/${partnershipId}`
    )
  }

  return {
    getMyPartnerships,
    getMyPartnershipById
  }
}
