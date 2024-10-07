export class ClosedInterval {
  _startNum: number;
  _endNum: number;

  constructor (startNum: number, endNum: number) {
    this._startNum = startNum;
    this._endNum = endNum;
  }

  public get value() {
    return `[${this._startNum},${this._endNum}]`
  }
}