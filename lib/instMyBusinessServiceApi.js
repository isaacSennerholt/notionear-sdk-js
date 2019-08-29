module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize my-business service api.'
    )
  }

  // Business resource
  function getBusinesses(parameters = {}) {
    return serviceClient.get(`/v1/businesses`, {
      params: parameters
    })
  }

  function getBusinessById(businessId) {
    return serviceClient.get(`/v1/businesses/${businessId}`)
  }

  function getMyBusinesses(parameters = {}) {
    return serviceClient.get(`/my/businesses`, {
      params: parameters
    })
  }

  function getMyBusinessById(businessId) {
    return serviceClient.get(`/my/businesses/${businessId}`)
  }

  return {
    getBusinesses,
    getBusinessById,
    getMyBusinesses,
    getMyBusinessById
  }
}
