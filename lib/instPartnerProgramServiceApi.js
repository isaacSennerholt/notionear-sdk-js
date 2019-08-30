module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize partner program service api.'
    )
  }

  const serviceIdentifier = 'bd20'
  const partnerProgramServicePath = `/${serviceIdentifier}/rest`

  // Plan resource
  function getPlans(brandId) {
    return serviceClient.get(
      `${partnerProgramServicePath}/v1/brands/${brandId}/plans`
    )
  }

  function getPlanById(brandId, planId) {
    return serviceClient.get(
      `${partnerProgramServicePath}/v1/brands/${brandId}/plans/${planId}`
    )
  }

  return {
    getPlans,
    getPlanById
  }
}
