const stringLength = require('./unittest');

test('should return length of string "Shah" ', () => {
  expect(stringLength('Shah')).toBe(4);
});

test('should return length of string "Shah" ', () => {
  expect(stringLength('123456789')).toBeLessThan(10);
});

test('should return length of string "Shah" ', () => {
  expect(stringLength('Shah')).toBeGreaterThan(1);
});

