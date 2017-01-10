class Board {
    constructor(elementsInRow) {
        this._elementsInRow = elementsInRow;
        this.squares = new SquareCollection();

        const amountOfSquare = this.colsCount * this.rowsCount;
        for (let i = 1; i <= amountOfSquare-1; i++) {
            this.squares.add(new Square(i));
        }
        this.squares.add(new Square());
    }

    get rowsCount() {
        return this._elementsInRow;
    }

    get colsCount() {
        return this._elementsInRow;
    }
}
