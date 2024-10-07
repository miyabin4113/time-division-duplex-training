import { describe, expect, test } from 'vitest';
import { ClosedInterval } from '../../src/closedInterval'

describe('3つの整数を渡すと指定した整数を含むかどうかを判定できる', () => {
  test('1, 7, 3を渡すとtrueを返す', () => {
    const closedInterval = new ClosedInterval(1, 7, 3);
    expect(closedInterval.isInsideValue).toBe(true);
  });

  test('-1, 1, 0を渡すとtrueを返す', () => {
    const closedInterval = new ClosedInterval(-1, 1, 0);
    expect(closedInterval.isInsideValue).toBe(true);
  });

  test('1, 7, 7を渡すとtrueを返す', () => {
    const closedInterval = new ClosedInterval(1, 7, 7);
    expect(closedInterval.isInsideValue).toBe(true);
  });

  test('1, 7, 10を渡すとfalseを返す', () => {
    const closedInterval = new ClosedInterval(1, 7, 10);
    expect(closedInterval.isInsideValue).toBe(false);
  });
});
