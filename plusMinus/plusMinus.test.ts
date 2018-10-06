import plusMinus from './plusMinus';

it('Should return an array of 3 numbers', () => {
    const numbers = [1, 2, 3, 0, -1, -2, -2];
    expect(Array.isArray(plusMinus(numbers))).toBe(true);
    expect(plusMinus(numbers).length).toBe(3);
});

it('Should return ratio in the correct order', () => {
    const numbers = [1, 1, 2, 3, 0, -1, -2, -2];
    const positiveRatio = 4 / 8;
    const negativeRatio = 3 / 8;
    const zeroRatio = 1 / 8;
    expect(plusMinus(numbers)).toEqual([positiveRatio, negativeRatio, zeroRatio]);
});