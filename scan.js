let axios = require('axios');

const SCANME_ADDRESS = 'http://127.0.0.1:8080/';

module.exports = function(requestData) {
    return axios.post(SCANME_ADDRESS, requestData)
}
