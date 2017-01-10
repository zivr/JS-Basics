class SliderView {
    constructor(board , $rootElement) {
        this._board = board;
        this._$rootEl = $rootElement;

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
        }
    }
}
