"use strict";

//let item = new TodoApp.ToDoItem('learn ES2015');
//console.log(item.toString());
var myToDoApp = TodoApp.ToDoFactory.createApp();
var buyMilk = TodoApp.ToDoFactory.createItem("buy milk");
myToDoApp.add(buyMilk);
myToDoApp.add(TodoApp.ToDoFactory.createItem("read a book"));
let tempItem = myToDoApp.add(TodoApp.ToDoFactory.createItem("something temp"));

//console.log('Have I bought milk ? ' + buyMilk.isDone);
buyMilk.done = true;
//console.log('Have I bought milk ? ' + buyMilk.isDone);
console.log(myToDoApp.toString());

