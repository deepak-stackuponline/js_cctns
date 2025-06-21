
import './App.css';
import React from 'react';
import AppMenu from './components/header/AppMenu';
import AppName from './components/header/AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/props/States';



function App() {

  return (

    

<div className='container'>

<AppMenu/>
<AppName />
<States />

</div>

);
}


export default App;
