/**
 * Created by sandeepj on 19/7/17.
 */
import {observable,computed} from "mobx";
class Todo{
    @observable value;
    @observable id;
    @observable complete

    constructor(value){
        this.value=value;
        this.id=Date.now();
        this.complete=false;
    }
}
class TodoStore{
    constructor(){
        this.createTodo=this.createTodo.bind(this);
    }
    @observable todos=[];
    @observable filter="";
    @computed get filteredTodos(){
        console.log("called")
        var matchesfilter=new RegExp(this.filter, "i")
        return this.todos.filter(todo=> !this.filter||matchesfilter.test(todo.value))
    }
    createTodo(value){
        this.todos.push(new Todo(value))
    }
    clearComplete = ()=>{
        const inCompleteTodos=this.todos.filter(todo=>!todo.complete)
        this.todos.replace(inCompleteTodos)
    }
}
 // var store=new TodoStore;
 export default new TodoStore;
