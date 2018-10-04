import testFunction from './nottest';

test('test', () => {
    expect(testFunction()).toBe(true);
})