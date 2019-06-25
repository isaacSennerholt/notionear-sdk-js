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
  function getPlans(brandId) {
    return serviceClient.get(
      `${partnerProgramServiceUrl}/v1/brands/${brandId}/plans`
    )
  }

  function getPlanById(brandId, planId) {
    return serviceClient.get(
      `${partnerProgramServiceUrl}/v1/brands/${brandId}/plans/${planId}`
    )
  }

  return {
    getPlans,
    getPlanById
  }
}
