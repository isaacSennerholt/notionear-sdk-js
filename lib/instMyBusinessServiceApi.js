module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize my-business service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = '6f8c'
  const myBusinessServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest/my`

  // Business resource
  function getBusinesses(parameters = {}) {
    return serviceClient.get(`${myBusinessServiceUrl}/businesses`, {
      params: parameters
    })
  }

  return {
    getBusinesses
  }
}
