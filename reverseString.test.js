import { expect, test } from '@jest/globals';
import reverseString from './reverseString';

test('reverse a single word', () => {
  expect(reverseString('jerry')).toBe('yrrej');
});

test('reverse a sentence', () => {
  expect(reverseString('jerry is nice')).toBe('ecin si yrrej');
});

test('reverse an empty string', () => {
  expect(reverseString('')).toBe('');
});