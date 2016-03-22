"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.ToDoItemView = class ToDoItemView {
    constructor(toDoItem) {
        this.myModal = toDoItem;
    }

    render(parentDom) {
        parentDom.append(`<li class="todo--list-item">
            <input class="todo--item-indicator" type="checkbox" id="${this.myModal.id}" ${this.myModal.isDone ? 'checked':''}>
            <label for="${this.myModal.id}">${this.myModal.description}</label>
        </li>`);
    }
};
