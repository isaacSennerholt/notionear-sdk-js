module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize my-business service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = '6f8c'
  const myBusinessServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // Business resource
  function getBusinesses(parameters = {}) {
    return serviceClient.get(`${myBusinessServiceUrl}/v1/businesses`, {
      params: parameters
    })
  }

  function getBusinessById(businessId) {
    return serviceClient.get(
      `${myBusinessServiceUrl}/v1/businesses/${businessId}`
    )
  }

  function getMyBusinesses(parameters = {}) {
    return serviceClient.get(`${myBusinessServiceUrl}/my/businesses`, {
      params: parameters
    })
  }

  function getMyBusinessById(businessId) {
    return serviceClient.get(
      `${myBusinessServiceUrl}/my/businesses/${businessId}`
    )
  }

  return {
    getBusinesses,
    getBusinessById,
    getMyBusinesses,
    getMyBusinessById
  }
}
