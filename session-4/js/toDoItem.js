"use strict";

var TodoApp = TodoApp || {}; //namespace definition
TodoApp.ToDoItem = class ToDoItem {
    constructor(description, status){
        const createGuid = () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        this.id = createGuid();
        this.description = description;
        this._isDone = status || false;
        this.created = new Date();
        this._doneDate = null;
    }

    get isDone() {
        return this._isDone;
    }

    set done(value) {
        this._isDone = value;
        if (this._isDone){
            this._doneDate = new Date();
        }
    }

    toString() {
        return `Task ${this.id} - "${this.description}"
        was created at ${this.created.toLocaleString()}
        ${this.isDone ? ` and finished at ${this._doneDate.toLocaleTimeString()}` : ' but still await for you to finish it'}
        `;
    }
};

