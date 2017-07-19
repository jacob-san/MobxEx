import React, {Component} from 'react';
import {observer} from 'mobx-react'


@observer
class TodoList extends Component {
  constructor(props){
    super(props);
    this.filter=this.filter.bind(this)
      this.createNew=this.createNew.bind(this)
  }
    toggleComplete(todo){
      todo.complete=!todo.complete
    }
  createNew(e){
    if(e.which===13){
      this.props.store.createTodo(e.target.value)
    }
  }
  filter(e){
    this.props.store.filter=e.target.value
  }
  render() {
    const {todos, filter, filteredTodos} = this.props.store;
    const todoLis = filteredTodos.map((todo)=>{
      return(
      <li key={todo.id}>
        <input type="checkbox" onChange={()=>{this.toggleComplete(todo)}} value={todo.complete} checked={todo.complete} />{todo.value}
      </li>
      )
    })
    return (
        <div>
      <h1>todos</h1>
          <input className="create" onKeyPress={this.createNew}/>
          <input className="filter" value={filter} onChange={this.filter}/>
        <ul>{todoLis}</ul>
          <a href="#" onClick={this.props.store.clearComplete}>Clear complete</a>
        </div>
    )
  }
}
export default TodoList;
