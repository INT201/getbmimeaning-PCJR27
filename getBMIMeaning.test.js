 const getBMIMeaning = require('./getBMIMeaning')
const testFn = require('./getBMIMeaning')

test('output#1', () => {
  expect(testFn(65, 1.8)).toBe('Normal weight')
  testFn(65, 1.8)
})

test('output#2', () => {
  expect(testFn(80, 1.7)).toBe('Overweight')
  getBMIMeaning(80,1.7)
})

test('output#3', () => {
  expect(testFn(44, 1.6)).toBe('Underweight')
  testFn(getBMIMeaning(44,1.6))
})
