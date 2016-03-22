"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.ToDoFactory = class ToDoFactory {
    static createItem(description, status) {
        return new TodoApp.ToDoItem(description, status);
    }
    static createApp() {
        return new TodoApp.ToDoList();
    }
};

