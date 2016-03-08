"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.ToDoFactory = class ToDoFactory {
    static createItem(description) {
        return new TodoApp.ToDoItem(description);
    }
    static createApp() {
        return new TodoApp.ToDoList();
    }
};

