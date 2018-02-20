const RestCalculator = require('./../rest-calculator');
const RequestService = require('./../request-service');

// Mock request service
jest.mock('./../request-service', () => {
    return jest.fn().mockImplementation(() => {
        return {
            sendRequest: () => {
                return { 'data': 17 }
            }
        };
    });
});

describe('testing rest calculator', () => {

    it('should have valid results', async () => {
        const requestService = new RequestService('http://api.mathjs.org/v1');
        const restCalc = new RestCalculator(requestService);
        expect(await restCalc.add(2, 15)).toEqual(17);
    })
});