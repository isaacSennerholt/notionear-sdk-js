module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize user service api.'
    )
  }

  const serviceBaseUrl = 'http://localhost:3000'
  const serviceIdentifier = '0d7a'
  const userServiceUrl = `${serviceBaseUrl}/${serviceIdentifier}/rest`

  // User resource
  function getMyUser() {
    return serviceClient.get(`${userServiceUrl}/users/self`)
  }

  return {
    getMyUser
  }
}
