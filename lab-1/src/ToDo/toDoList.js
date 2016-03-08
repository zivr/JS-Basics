"use strict";

TodoApp.ToDoList = class ToDoList {
    constructor(){
        this.items = [];
    }

    add(item) {
        this.items.push(item);
        return item;
    }

    remove(itemId) {
        this.items = this.items.filter((item) => {
            return item.id !== itemId;
        });
    }

    toString() {
        var itemsList = [];
        this.items.forEach(function(item , idx){
            itemsList.push('item [' + idx + ']: ' + item);
        });
        return itemsList.join('\n');
    };
};
