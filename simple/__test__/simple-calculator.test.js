const SimpleCalculator = require('./../simple-calculator');

describe('testing simple calculator', () => {

    it('should have valid results for integer params', () => {
        const calc = new SimpleCalculator();
        expect(calc.add(1,4)).toEqual(5);
    });

    it('should have valid results for string string', () => {
        const calc = new SimpleCalculator();
        expect(calc.add('1','4')).toEqual(5);
    });
});