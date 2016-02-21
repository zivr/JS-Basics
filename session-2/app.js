var TodoApp = TodoApp || {}; //namespace definition


TodoApp.TodoItem = function (description){
    this.description = description;
    this.date = new Date();
    this._doneDate = null;
    var done = false;

    this.isDone = function () {
        return done;
    };
    this.__defineSetter__("done", function(val){
        done = val;
        if (done){
            this._doneDate = new Date();
        }
    });
};


TodoApp.TodoItem.prototype.toString = function() {
    var result = 'Task ' + this.description + ' was created at ' + this.date.toLocaleString();
    if (this.isDone()){
        result += ' and finished at ' + this._doneDate.toLocaleTimeString();
    }
    else{
        result += ' but still await for you to finish it';
    }
    return result;
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
        itemsList.push('item [' + idx + ']: ' + item);
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

console.log('Have I bought milk ? ' + buyMilk.isDone());

buyMilk.done = true;
console.log('Have I bought milk ? ' + buyMilk.isDone());
console.log(myToDoApp);


