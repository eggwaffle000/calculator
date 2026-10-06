import { expect, test } from 'vitest';
import { add, subtract, multiply } from './calculator';

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

test('multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies by zero', () => {
  expect(multiply(5, 0)).toBe(0);
});
