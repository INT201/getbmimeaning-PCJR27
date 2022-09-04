 const getBMIMeaning = require('./getBMIMeaning')
const testFn = require('./getBMIMeaning')

test('output#1', () => {
  expect(testFn(65, 1.8)).toBe('Normal weight')
  console.log(getBMIMeaning(65,1.8))
})

test('output#2', () => {
  expect(testFn(80, 1.7)).toBe('Overweight')
  console.log(getBMIMeaning(80,1.7))
})

test('output#3', () => {
  expect(testFn(44, 1.6)).toBe('Underweight')
  console.log(getBMIMeaning(44,1.6))
})
