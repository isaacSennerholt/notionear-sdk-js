module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize user service api.'
    )
  }

  const serviceIdentifier = '0d7a'
  const userServicePath = `/${serviceIdentifier}/rest`

  // User resource
  function getMyUser() {
    return serviceClient.get(`${userServicePath}/users/self`)
  }

  return {
    getMyUser
  }
}
