export class ClosedInterval {
  _startNum: number;
  _endNum: number;
  _checkNum?: number;

  constructor (startNum: number, endNum: number, checkNum?: number) {
    if (!Number.isInteger(startNum)) {
      throw new Error("第1引数に整数を入れてください");
    }

    if (!Number.isInteger(endNum)) {
      throw new Error("第2引数に整数を入れてください");
    }

    if (startNum > endNum) {
      throw new Error('第2引数より第1引数の方が大きいため閉区間が存在しません');
    }

    this._startNum = startNum;
    this._endNum = endNum;
    this._checkNum = checkNum;
  }

  public get value() {
    return `[${this._startNum},${this._endNum}]`
  }

  public get isInsideValue() {
    if (this._checkNum === undefined) return false;

    return this._startNum <= this._checkNum && this._checkNum <= this._endNum
  }
}