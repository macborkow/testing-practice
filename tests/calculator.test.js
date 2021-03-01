import { expect, test } from '@jest/globals';
import calculator from '../src/calculator';

test('add', () => {
  expect(calculator.add(5,10)).toBe(15);
});

test('substract', () => {
  expect(calculator.substract(10,5)).toBe(5);
});

test('divide', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('multiply', () => {
  expect(calculator.multiply(5,2)).toBe(10);
});

test('divide by zero', () => {
  expect(()=>calculator.divide(5, 0)).toThrow(Error);
});