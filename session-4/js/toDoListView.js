"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.toDoListView = class toDoListView {
    constructor(todoList, todoListNode) {
        this.myModal = todoList;
        this.myBaseNode = todoListNode;
    }

    render() {
        for(var item of this.myModal){
            var todoListItemView =  new TodoApp.ToDoItemView(item);
            todoListItemView.render(this.myBaseNode);
        }
    }

    clean() {
        this.myBaseNode.innerHTML = '';
    }
};
