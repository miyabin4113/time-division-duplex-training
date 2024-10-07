import { describe, expect, test } from 'vitest';
import { ClosedInterval } from '../../src/closedInterval'

describe('第1引数が第2引数よりも大きい場合は「第2引数より第1引数の方が大きいため閉区間が存在しません」というエラーを返す', () => {
  test('4, 3を渡すと `第2引数より第1引数の方が大きいため閉区間が存在しません` というエラーを返す', () => {
    expect(() => new ClosedInterval(4, 3)).toThrow('第2引数より第1引数の方が大きいため閉区間が存在しません');
  });
});
