import { expect, test } from '@jest/globals';
import capitalize from './capitalize';

test('capitalize a single word', () => {
  expect(capitalize('jerry')).toBe('Jerry');
});

test('capitalize a sentence', () => {
  expect(capitalize('jerry loves icecream')).toBe('Jerry loves icecream');
});

test('do nothing when first char is whitespace', () => {
  expect(capitalize(' jerry')).toBe(' jerry');
});

test('do nothing on an empty string', () => {
  expect(capitalize('')).toBe('');
});