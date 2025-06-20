import React, { useState } from 'react';
import AppmenuChild from './AppmenuChild';
import './AppMenu.css'; 
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppMenu() {
  const clickHandler = () => {
    alert("Button clicked!");
  }

  const doubleClickHandler = (name) => {
    alert("Button double-clicked! by"+ name);
  }

  const onChangeHandler = () => {
     alert("Value changed"); 
    }
  
  const onMouseOverHandler = () => {
    alert("Mouse over event triggered!");
  }

  const [colour, setColour] = useState("blue");
  const[cont, setCount] = useState(0);

  const increment = () => {
    setCount(cont + 1);
  }

  const decrement = () => {
    setCount(cont - 1); 
  }

  const changeColour = () => { 
    setColour(colour === "blue" ? "red" : "blue");
  }


  return (
    <div>
      <h1 className='bg-success text-center text-white'>Book Store</h1>
      <p className='SubHeader'>Your one-stop shop for all your reading needs</p>
      <Button className='m-2'onClick={clickHandler}>Login</Button>
      <Button className='m-2 btn-danger'onDoubleClick={()=>doubleClickHandler("Deepak")}>Register</Button>
      <input type='text' onChange={onChangeHandler} className='m-2' placeholder='Type something...' />
      <h1 className='bg-primary text-center text-white' onMouseOver={onMouseOverHandler}>Welcome to the Book Store</h1>



      <Button className='m-2' onClick={changeColour} style={{backgroundColor: colour}}>Change Colour</Button>
      <h2 className='text-center' style={{color: colour}}>Current Colour: {colour}</h2>


   <div className="d-flex justify-content-center">
      <h1 className='text-center'>Counter: {cont}</h1>
      <Button className='m-2 btn-success center' onClick={increment}>+</Button>  
      <Button className='m-2 btn-danger' onClick={decrement}>-</Button>

</div>

        <ul>
            <li>Home</li>
            <li>Browse Books</li>
            <li>List a Book</li>
            <li>Get Recommendations</li>
            <li>Profile</li>
            <li><AppmenuChild /></li>
        </ul>
        

    </div>
  )
}

export default AppMenu