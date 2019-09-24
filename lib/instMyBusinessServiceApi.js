module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize my-business service api.'
    )
  }

  const serviceIdentifier = '6f8c'
  const myBusinessServicePath = `/${serviceIdentifier}/rest`

  // Business resource
  function getBusinesses(parameters = {}) {
    return serviceClient.get(`${myBusinessServicePath}/v1/businesses`, {
      params: parameters
    })
  }

  function getBusinessById(businessId) {
    return serviceClient.get(
      `${myBusinessServicePath}/v1/businesses/${businessId}`
    )
  }

  function getMyBusinesses(parameters = {}) {
    return serviceClient.get(`${myBusinessServicePath}/my/businesses`, {
      params: parameters
    })
  }

  function getMyBusinessById(businessId) {
    return serviceClient.get(
      `${myBusinessServicePath}/my/businesses/${businessId}`
    )
  }

  // Address resource
  function getAddresses(businessId, parameters = {}) {
    return serviceClient.get(
      `${myBusinessServicePath}/v1/businesses/${businessId}/addresses`,
      {
        params: parameters
      }
    )
  }

  return {
    getBusinesses,
    getBusinessById,
    getMyBusinesses,
    getMyBusinessById,
    getAddresses
  }
}
