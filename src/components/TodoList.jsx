import React from "react";
//import components
import Todo from './Todo';
//Giving the Todolist access to the Todos state to render
const TodoList = ({ todos, setTodos, filteredTodos}) => {
    return (
    <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                //passing down the (data of the input state ) using props 
                <Todo 
                setTodos={setTodos}
                todos={todos}
                key={todo.id} 
                todo={todo}
                text={todo.text}
               
                />
            ))}
        </ul>
     
    </div>
    );

};

export default TodoList;
