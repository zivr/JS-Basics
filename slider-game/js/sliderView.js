class SliderView {
    constructor(board , $rootElement) {
        this._board = board;
        this._$rootEl = $rootElement;

        $(this._board).on(Board.EVENTS.SWAP, this.onSwapSquares.bind(this));
        $(this._board).on(Board.EVENTS.SHUFFEL, this.resetUI.bind(this));
    }

    resetUI() {
        const rows = this._board.rowsCount;
        const self = this;

        this._$rootEl.addClass('board board--'+rows+'-in-row');

        for(let square of this._board.squares) {
            const $squareEl = $('<div class="board__cell">' + (square.value || '&nbsp;') + '</div>');
            $squareEl.data('square', square);
            if (square.isBlank) {
                $squareEl.addClass('board__empty-cell');
            }
            else if (square.value % 2) {
                $squareEl.addClass('board__cell-odd');
            }
            else {
                $squareEl.addClass('board__cell-even');
            }
            self._$rootEl.append($squareEl);
            if (!square.isBlank) {
                $squareEl.click(self.onSquareClicked.bind(self));
            }
        }
    }

    onSquareClicked({currentTarget}) {
        const $clickedSquare = $(currentTarget);
        $(this._board).trigger(Board.EVENTS.MOVE, $clickedSquare.data('square'));
    }

    onSwapSquares(e , {posA, posB}) {
        const $elA = this._$rootEl.find('div:nth-child('+(posA+1)+')' );
        const $elB = this._$rootEl.find('div:nth-child('+(posB+1)+')' );
        const $tmpEl = $('<span>').hide();
        $elA.before($tmpEl);
        $elB.before($elA);
        $tmpEl.replaceWith($elB);
    }
}
