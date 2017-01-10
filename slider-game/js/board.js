class Board {
    constructor(elementsInRow) {
        this._elementsInRow = elementsInRow;
        this.squares = new SquareCollection();

        this.shuffle();
    }

    get rowsCount() {
        return this._elementsInRow;
    }

    get colsCount() {
        return this._elementsInRow;
    }

    shuffle() {
        const amountOfSquare = this.colsCount * this.rowsCount;
        for (let i = 1; i <= amountOfSquare-1; i++) {
            this.squares.add(new Square(i));
        }
        this.squares.add(new Square());
    }
    _checkIsSolvable() {
        return new Promise((resolve, reject) => {
            let inversions = 0;
            this.squares.every((squareI, idx) => {
                for(const squareJ in this.squares){
                    if (squareJ.isBlank || squareI.value > squareJ.value) {
                        inversions++;
                    }
                }
                if (squareI.isBlank && idx % 2 === 1) {
                    inversions++;
                }
            });
            inversions % 2 == 0 ? resolve() : reject();
        });
    };
}
