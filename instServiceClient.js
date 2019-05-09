const axios = require('axios')
const createCrudClient = require('create-crud-client')

module.exports = function({ authorizationHeader }) {
  const options = {
    headers: { Authorization: authorizationHeader }
  }

  return createCrudClient(axios)(options)
}
