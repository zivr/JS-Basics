class Board {
    constructor(elementsInRow) {
        this._elementsInRow = elementsInRow;
        this.squares = new SquareCollection();
        this._movesCount = 0;

        $(this).on(Board.EVENTS.MOVE, this.onMoveSquares.bind(this));
    }

    static get EVENTS() {
        return {
            SHUFFEL: 'SHUFFEL',
            MOVE: 'MOVE',
            SWAP: 'SWAP',
            WIN: 'WIN'
        };
    }

    get rowsCount() {
        return this._elementsInRow;
    }

    get colsCount() {
        return this._elementsInRow;
    }

    get moves() {
        return this._movesCount;
    }

    shuffle() {
        const amountOfSquare = this.colsCount * this.rowsCount;

        let squaresNum = [];
        for (let i = 0; i < amountOfSquare; i++) {
            squaresNum[i] = i + 1;
        }
        squaresNum[amountOfSquare - 1] = null;

        this.squares.clean();
        for (let i = 1; i <= amountOfSquare; i++) {
            const num = Math.floor(Math.random() * squaresNum.length);
            this.squares.add(new Square(squaresNum[num]));
            squaresNum.splice(num, 1);
        }
        this._checkIsSolvable().then(()=> {
            $(this).trigger(Board.EVENTS.SHUFFEL);
        }, () => {
            this.shuffle();
        });
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
    }

    onMoveSquares(e, square){
        const blankSquare = this.squares.getBlankSquare();
        if (this.squares.isNeighbors(square, blankSquare)) {
            this.squares.swap(blankSquare, square);
            $(this).trigger(Board.EVENTS.SWAP, {
                squareA: square,
                posA: this.squares.indexOf(square),
                squareB: blankSquare,
                posB: this.squares.indexOf(blankSquare)
            });
            this._movesCount++;
            $('.js-moves-counter').text(this.moves);
            this._checkIsWinning();
        }
    }

    _checkIsWinning() {
        const isWinning = this.squares.every(function(square, index) {
            return square.isBlank || square.value === (index + 1);
        });
        if (isWinning) {
            $(this).trigger(Board.EVENTS.WIN);
        }
    }
}
