const axios = require('axios');

class RequestService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    sendRequest(method, endpoint) {
        return axios({
            method: method,
            url: this.baseUrl + endpoint,
        });
    }
}

module.exports = RequestService;