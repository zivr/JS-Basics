class Square {
    constructor(value) {
        this._val = value;
    }

    get value() {
        return this._val;
    }

    get isBlank() {
        return this._val === null || isNaN(this._val);
    }
}

class SquareCollection{
    constructor() {
        this.squares = [];
    }

    add(square) {
        this.squares.push(square);
    }

    clean() {
        this.squares = [];
    }

    indexOf(square) {
        return this.squares.indexOf(square);
    }

    every(callback) {
        return this.squares.every(callback);
    }

    *[Symbol.iterator]() {
        for(let i= 0, len=this.squares.length; i < len; i++){
            yield this.squares[i];
        }
    }
}
