var TodoApp = TodoApp || {}; //namespace defenition


TodoApp.TodoItem = function (description){
    this.description = description;
};

TodoApp.TodoList = function (){
    this.items = [];
    this.Add = function(item) {
        this.items.push(item);
    }
};

TodoApp.TodoList.prototype.toString = function () {
    var itemsList = [];
    this.items.forEach(function(item , idx){
        itemsList.push('item [' + idx + ']: ' + JSON.stringify(item));
    });
    return itemsList.join('\n');
};
TodoApp.TodoList.prototype.inspect = TodoApp.TodoList.prototype.toString;



// Todo Items Factory
TodoApp.TodoFactory = {
    createItem: function(description) {
        var todoItem = new TodoApp.TodoItem(description);
        return todoItem;
    },
    createApp: function() {
        return new TodoApp.TodoList();
    }
};

// example usage
var myToDoApp = TodoApp.TodoFactory.createApp();
var buyMilk = TodoApp.TodoFactory.createItem("buy milk");
myToDoApp.Add(buyMilk);
myToDoApp.Add(TodoApp.TodoFactory.createItem("read a book"));
console.log(myToDoApp);


