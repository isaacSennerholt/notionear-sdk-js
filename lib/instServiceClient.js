const axios = require('axios')
const createCrudClient = require('create-crud-client')

module.exports = function(accessToken) {
  const options = {
    adapter: ({ data }) => data,
    headers: { Authorization: `Bearer ${accessToken}` },
    errorProcessor: ({ response = {} }) => {
      const { data } = response
      return Promise.reject(data)
    }
  }

  return createCrudClient(axios)(options)
}
