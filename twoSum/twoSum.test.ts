import twoSum from './twoSum';

it('Returns an array of 2 numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 3;
    expect(Array.isArray(twoSum(numbers, target))).toBe(true);
    expect(twoSum(numbers, target).length).toBe(2);
    expect(twoSum(numbers, target)).toEqual([0, 1]);
});

it('Returns the latest indices of found sum', () => {
    const numbers = [1, 1, 2, 3, 4, 5];
    const target = 3;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
});