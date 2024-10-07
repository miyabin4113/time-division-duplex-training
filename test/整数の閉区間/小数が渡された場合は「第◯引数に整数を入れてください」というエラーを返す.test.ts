import { describe, expect, test } from 'vitest';
import { ClosedInterval } from '../../src/closedInterval'

describe('2つの整数を渡すと文字列を返す', () => {
  test('1.55, 3を渡すと `第1引数に整数を入れてください` というエラーを返す', () => {
    expect(() => new ClosedInterval(1.55, 3)).toThrow('第1引数に整数を入れてください');
  });

  test('1, 3.34を渡すと `第2引数に整数を入れてください` というエラーを返す', () => {
    expect(() => new ClosedInterval(1, 3.34)).toThrow('第2引数に整数を入れてください');
  });
});
