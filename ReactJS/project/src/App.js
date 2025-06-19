
import './App.css';
import React from 'react';
import AppMenu from './components/header/AppMenu';
import AppName from './components/header/AppName';


function App() {

  const name = 'Deepak';

  const a = 20;
  const b = 30;

  const message = () => {
    return 'Hello, this is a message!';
  };
  return (

    

<div>

<AppMenu/>
<AppName />

</div>

);
}


function Row(){
  return(

      <>
     
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
      
  </>
  )
};

function Column(){
  return(
    <>
      
        <tr>
          <td>Deepak</td>
          <td>Delhi</td>
        </tr>
     </> 
  
  )
};
export default App;
