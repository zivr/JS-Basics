"use strict";

class PageView {
    constructor(myToDoApp) {

        this.myToDoApp = myToDoApp;

        this.addBtn = $('#addBtn');
        this.filterBtn = $('#filterBtn');
        this.addSection = $('#addSection');
        this.filterSection = $('#filterSection');
        this.newItemDescNode = $('#newItemDesc');
        this.todoListUl = $('.js-todo');

        this.addBtn.click(() => {
            this._toggleAddTaskUi(true);
        });
        this.filterBtn.click(() => {
            this._toggleFilterTaskUi(true);
        });
        $('#addItemBtn').click(this.addItem.bind(this));


        this.myToDoAppView = new TodoApp.ToDoListView(this.myToDoApp, this.todoListUl);
        this._syncModelAndView();
    }

    _toggleAddTaskUi(show) {
        this.addBtn.toggleClass('hide', show);
        this.filterBtn.toggleClass('hide', show);
        this.addSection.toggleClass('hide', !show);
    }

    _toggleFilterTaskUi() {
        this.filterSection.toggleClass('hide');
    }

    addItem() {
        var desc = this.newItemDescNode.val();
        this.myToDoApp.add(TodoApp.ToDoFactory.createItem(desc));

        this._toggleAddTaskUi(false);
        this.newItemDescNode.val('');

        this._syncModelAndView(this.myToDoApp);
    }


    _syncModelAndView() {
        if (this.myToDoAppView) {
            this.myToDoAppView.clean();
            this.myToDoAppView.render();
        }
    }
}


$(function() {
    var myToDoApp = TodoApp.ToDoFactory.createApp();
    var modal = [{ desc: 'By Milk', done: true }, { desc: 'Learn JS', done: false }];


    modal.forEach(function(item) {
        myToDoApp.add(TodoApp.ToDoFactory.createItem(item.desc, item.done));
    });

    var pageView = new PageView(myToDoApp);
});
