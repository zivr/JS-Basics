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

    getBlankSquare() {

    }

    indexOf(square) {
        return this.squares.indexOf(square);
    }

    swap(squareA, squareB) {
        const squareAPos = this.indexOf(squareA);
        const squareBPos = this.indexOf(squareB);
        this.squares[squareAPos] = squareB;
        this.squares[squareBPos] = squareA;
    }

    _convertTo2D(square) {
        const numOfCols = Math.sqrt(this.squares.length);
        const index = this.squares.indexOf(square);
        return { x: Math.floor(index / numOfCols), y: index % numOfCols }
    }

    isNeighbors(squareA, squareB) {
        const squareAPos = this._convertTo2D(squareA);
        const squareBPos = this._convertTo2D(squareB);

        return ((squareAPos.x === squareBPos.x && Math.abs(squareAPos.y - squareBPos.y) === 1) ||
        (squareAPos.y === squareBPos.y && Math.abs(squareAPos.x - squareBPos.x) === 1));
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
