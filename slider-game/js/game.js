class Game {
    constructor(elementsInRow) {
        this._board = new Board(elementsInRow);
        this._view = new SliderView(this._board , $('.js-board'));
    }

    static startGame(elementsInRow) {
        const g = new Game(elementsInRow);
        g.shuffle();
        return g;
    }

    shuffle() {
        this._board.shuffle();
    }
}

