import React, {useState} from 'react'
import "./form.css";

function Form() {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [problems, setProblems] = useState("");
  console.log(name, Password, email);
  
    function handleSubmit(e){
    e.preventDefault();
    
  }
    return (
    <form className='form_container' onSubmit={handleSubmit}>
        <div className='form_body'>
        <label>Name</label>
        <input type="text"
         className="input_color" 
        value={name}
         onChange={(e)=> {
        setName(e.target.value);
        }} />
        </div>
        <div className='form_body'>
        <label>Password</label>
        <input type="Password"
         className="input_color" 
         value={Password}
         onChange={(e)=> {
        setPassword(e.target.value);
    }}/>
        </div>
        <div className='form_body'>
        <label>Email</label>
        <input type="Email"
         className="input_color" 
         value={email}
         onChange={(e)=> {
        setEmail(e.target.value);
    }} />
        </div>
        <div className='form_body'>
            <label>
                Log your complains
            </label>
            <textarea className='input_textarea'
            value={problems} onChange={(e)=>setProblems(e.target.value)}>Complains</textarea>
        </div>
        <input type="submit" name="submit" 
        className="form_btn"/>
    </form>
  )
}

export default Form;
