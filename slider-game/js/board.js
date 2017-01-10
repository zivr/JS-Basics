class Board {
    constructor(elementsInRow) {
        this._elementsInRow = elementsInRow;
        this.squares = new SquareCollection();
    }

    static get EVENTS() {
        return {
            SHUFFEL: 'SHUFFEL',
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
    };
}
