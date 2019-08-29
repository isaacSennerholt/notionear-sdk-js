module.exports = function(serviceClient) {
  if (!serviceClient) {
    throw new Error(
      'A configured service client is required to initialize user service api.'
    )
  }

  // User resource
  function getMyUser() {
    return serviceClient.get(`/users/self`)
  }

  return {
    getMyUser
  }
}
