const reverseString = require('./unittest');

test('should return reverse string of "Shah" ', () => {
  expect(reverseString('Shah')).toMatch('hahS');
});