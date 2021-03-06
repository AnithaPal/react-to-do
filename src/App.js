import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { description: 'Walk the Dog', isCompleted: true },
                { description: 'Empty Dishwasher', isCompleted: false },
                { description: 'Pickup Anya', isCompleted: false }
            ],

            newTodoDescription: ''
        };
    }


    deleteToDo(description) {
        const newToDo = this.state.todos.filter(todo => todo.description !==  description)
        this.setState({ todos: newToDo});

    }

    handleChange(e) {
        this.setState({ newTodoDescription: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.newTodoDescription) { return }
        console.log("handle submitted");
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
        this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });  
  
    }

    
    toggleComplete(index) {
        const todos = this.state.todos.slice();
        const todo = todos[index];
        todo.isCompleted = todo.isCompleted ? false : true;
        this.setState({ todos: todos });
    }


    render() {
        return ( 
            <div className = "App" >
                <ul> {
                    this.state.todos.map((todo, index) =>
                        <ToDo key = { index }
                        description = { todo.description }
                        isCompleted = { todo.isCompleted }
                        toggleComplete={ () => this.toggleComplete(index) `q`}
                        deleteToDo={ () => this.deleteToDo(todo.description) }
                        />
                    )
                } 
                </ul>
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <input type="text" value={this.state.newTodoDescription} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}


export default App;