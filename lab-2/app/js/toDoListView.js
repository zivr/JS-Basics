"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.ToDoListView = class ToDoListView {
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
        this.myBaseNode.html('');
    }
};
