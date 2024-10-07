import { describe, expect, test } from 'vitest';
import {ClosedInterval} from '../../src/closedInterval'

describe('2つの整数を渡すと文字列を返す', () => {
  test('1, 7を渡すと `[1,7]` を返す', () => {
    const closedInterval = new ClosedInterval(1, 7);
    expect(closedInterval.value).toBe('[1,7]');
  })
})