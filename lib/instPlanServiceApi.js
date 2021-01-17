module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize plan service api.'
    )
  }

  const serviceIdentifier = 'bd20'
  const planServicePath = `/${serviceIdentifier}/rest`

  // Brand plan resource
  function getBrandPlans(businessId, parameters = {}) {
    return serviceClient.get(
      `${planServicePath}/my/businesses/${businessId}/plans`,
      {
        params: parameters
      }
    )
  }

  function getBrandPlan(businessId, planId) {
    return serviceClient.get(
      `${planServicePath}/my/businesses/${businessId}/plans/${planId}`
    )
  }

  return {
    getBrandPlans,
    getBrandPlan
  }
}
