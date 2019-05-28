module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize partner program service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = 'bd20'
  const partnerProgramServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // Plan resource
  function getPlans(businessId) {
    return serviceClient.get(
      `${partnerProgramServiceUrl}/v1/brands/${businessId}/plans`
    )
  }

  function getPlanById(businessId, planId) {
    return serviceClient.get(
      `${partnerProgramServiceUrl}/v1/brands/${businessId}/plans/${planId}`
    )
  }

  return {
    getPlans,
    getPlanById
  }
}
