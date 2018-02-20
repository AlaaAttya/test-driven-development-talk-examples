class RestCalculator {

    constructor(restService) {
        this.restService = restService;
    }

    async add(x, y) {
        const expression = encodeURIComponent(`${x}+${y}`);
        const response = await this.restService.sendRequest('get', `/?expr=${expression}`);
        return response.data;
    }
}

module.exports = RestCalculator;