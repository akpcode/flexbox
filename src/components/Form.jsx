import React from "react";
//This is how to access the properties passed down to this form like the setInputText, setStatus is imported so it can be accessed and saved
const Form = ({setInputText, todos, setTodos, inputText,setStatus}) => {
    //writing js code and function, this js is used to get the input values
    const inputTextHandler = (e) => {
        setInputText(e.target.value); 
    }
    const submitTodoHandler = (e) => {
        e.preventDefault(); //this is use to stop the page from refreshing automatically when submited
        setTodos([
            //...todos simply means if there is any todos, it should render it
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        //setInputText("") is used to clear our dom after submitting a form
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form >
            
            <input 
            /*The input is giving a value which is the input text to help the UI update */
            value={inputText}
             onChange={inputTextHandler}
              type="text"
               className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                
                <select //passing the status handler 
                onChange={statusHandler}
                name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;



