import {EventEmitter} from "events"; 

import dispatcher from "../dispatcher"; 

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todos = [
            {
                id: 22,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 33,
                text:"Pay Bills",
                complete: false
            },
            {
                id: 444444444,
                text:"Pay Electricity",
                complete: false
            },
            {
                id: 5454545454545454545,
                text:"Fix Car",
                complete: false
            },
        ];
    }

    createTodo(text){
        const id = Date.now();

        this.todos.push(
            {
                id,
                text,
                complete: false,
            });
            this.emit("change");
    }

    getAll(){
        return this.todos;
    }

    handleActions(action){

        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.reloadTodos(this.todos);
                this.emit("change");
            }
        }
        console.log("TodoStore recieved an action", action);
    }
}



const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));


window.todoStore = todoStore ;
window.dispatcher = dispatcher;
export default todoStore;