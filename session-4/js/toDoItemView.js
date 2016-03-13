"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.ToDoItemView = class ToDoItemView {
    constructor(toDoItem) {
        this.myModal = toDoItem;
    }

    render(parentDom) {
        const todoListLi = this._createToDoItemElement();
        parentDom.appendChild(todoListLi);
    }

    _createToDoIndicatorElement() {
        var node = document.createElement("input");
        node.className = "todo--item-indicator";
        node.type = "checkbox";
        node.id = this.myModal.id;
        node.checked = this.myModal.isDone;
        return node;
    }

    _createToDoDescriptionElement () {
        var node = document.createElement("label");
        node.setAttribute('for', this.myModal.id);
        node.innerText = this.myModal.description;
        return node;
    }

    _createToDoItemElement (){
        var li = document.createElement("li");
        li.className = "todo--list-item";
        li.appendChild(this._createToDoIndicatorElement());
        li.appendChild(this._createToDoDescriptionElement());
        return li;
    }
};
