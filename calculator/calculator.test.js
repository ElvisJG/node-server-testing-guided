const calculator = require('./calculator.js');

// new test
test('should ', () => {
  // assertions
  expect(true).toBe(true);
});

// Test suite is a collection of related tests
describe('The Calculator', () => {
  describe('The Add Method', () => {
    test('Should add two numbers', () => {
      const { add } = calculator;

      expect(add(2, 2)).toBe(4);
      expect(add(2, 1)).toBe(3);
      expect(add(-2, 4)).toBe(2);
    });

    // Add function should return 0 on no arguments
    test('should return 0 on no arguments', () => {
      const { add } = calculator;
      expect(add()).toBe(0);
    });
  });
  describe('The Subtract Method', () => {});
  describe('The Multiply Method', () => {});
});
