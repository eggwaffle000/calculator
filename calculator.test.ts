import { expect, test } from 'vitest';
import { add, subtract } from './calculator';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(add(-2, -3)).toBe(-5);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('subtracts to a negative result', () => {
  expect(subtract(3, 5)).toBe(-2);
});
