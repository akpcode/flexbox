import React, {useState,useEffect} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from "./components/TodoList";
function App() {
  //State Stuff
  /**Turning our input into a piece of state, so we import useState */
  const [inputText, setInputText] = useState("");
  //This is set to curly braces because it will take series of array and to add functionality to the todos
  const [todos, setTodos] = useState([]);
  //Setting another piece of state for the status of the Todos
  const [status, setStatus] = useState("");
  //filtering todos for UI rendering
  const [filteredTodos, setFilteredTodos] = useState([]);
 
 //run once when the app start
 useEffect(() => {
  getLocalTodos();
 }, []);
  //  USE EFFECT
 useEffect(() =>{
filterHandler();
saveLocalTodos();
},[todos, status]); //the empty [] allows the function to only run once, 
//setting it to todo means setting it to run as soon as the state of todo changes
  //Functions 
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.uncompleted === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local storage
  //Use to add data to the local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));

  };
  //used to check and save data to the local storage
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
     let todoLocal = JSON.parse(localStorage.getItem("todos"))
     console.log(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Moses's Todo List</h1> 
      </header>
      <Form
       /* This is used to pass the setInputText value into the form so it will be accessible in the form*/
      inputText={inputText}
       todos={todos}
      setTodos={setTodos}
      setInputText ={setInputText} 
      setStatus={setStatus}
      
    />
    
      <TodoList //passing the inputs states to the Todos so it can render it
      filteredTodos={filteredTodos}
      setTodos={setTodos} //the states is been passed using setTodos so its need to be accessible so the UI can update the events like delete and complete
      todos={todos} 
      

      />
    </div>
  );
}

export default App;
