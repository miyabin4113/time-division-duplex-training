import { describe, expect, test } from 'vitest';
import { ClosedInterval } from '../../src/closedInterval'

describe('第1引数が第2引数よりも大きい場合は「第2引数より第1引数の方が大きいため閉区間が存在しません」というエラーを返す', () => {
  test('1, 7を渡した状態で判定の関数を呼ぶと `第3引数に値が設定されていません` というエラーを返す', () => {
    const closedInterval =  new ClosedInterval(1, 7);
    expect(() => closedInterval.isInsideValue).toThrow('第3引数に値が設定されていません');
  });
});
