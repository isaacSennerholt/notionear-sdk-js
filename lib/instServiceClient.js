const axios = require('axios')
const createCrudClient = require('create-crud-client')

module.exports = function(accessToken) {
  let headers = {}
  if (accessToken) {
    headers = { ...headers, Authorization: `Bearer ${accessToken}` }
  }
  const options = {
    adapter: ({ data }) => data,
    headers,
    errorProcessor: ({ response = {} }) => {
      const { data } = response
      return Promise.reject(data)
    }
  }

  return createCrudClient(axios)(options)
}
