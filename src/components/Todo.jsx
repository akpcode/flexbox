import React from "react";
//creating access to the input-text data state
const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () =>{
        //checking the id and fittering to find the match then get rid of it
       setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item  => {
            if(item.id === todo.id){
                return{
                    //...item means the UI should render the remaining item from the state, the the other line is set to modify the completed to true if the id matchs
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li //passing down the text from state to ui to render using {text}
            //To update our UI, we will pass a class from the completed handle 
            //so as not to get rid of the former class which is todo-item, we in ${}, then write other classes in it
            className={'todo-item ${todo.completed ? "completed" :""}'}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;