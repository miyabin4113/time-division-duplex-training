import { describe, expect, test } from 'vitest';
import { ClosedInterval } from '../../src/closedInterval'

describe('2つの整数を渡すと文字列を返す', () => {
  test('1, 7, 5.555を渡すと `第3引数に整数を入れてください` というエラーを返す', () => {
    expect(() => new ClosedInterval(1, 7, 5.555)).toThrow('第3引数に整数を入れてください');
  });
});
