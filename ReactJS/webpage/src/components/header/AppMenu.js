import React, { useState, useEffect} from 'react';
import AppMenuAvatar from './AppMenuAvatar';
import './AppMenu.css';

function AppMenu() {
  const [activeItem, setActiveItem] = useState('Home');

  //setActiveItem is used to track the currently active menu item which is the state variable.
  //state function is used to update the state variable.


  const [menuItems, setMenuItems] = useState([]);

  // const menuItems = [
  //   'Home',
  //   'Browse Books',
  //   'List a Book',
  //   'Get Recommendations',
  //   'Profile',
  //   'Name'
  // ];


//effects load after loading the application

    async function fetchData() {
      try {
       
        const response = await fetch("https://mocki.io/v1/3f6a090a-72bd-4457-bd30-afd109eb7a5f");
        const data = await response.json();
        setMenuItems(data); 
        
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }




useEffect(()=>{     

 fetchData();

},[]);


   




  return (
<div className="primary-color p-3 d-flex align-items-center justify-content-end">
  <ul className="list-inline m-0 d-flex align-items-center">
    {menuItems.map((item) => (
      

      <li className="list-inline-item px-1">

        <a href="#" className={`text-decoration-none menu-link ${activeItem === item ? 'text-dark active' : 'text-secondary'}`}
          
          
        onClick={() => setActiveItem(item)}  
          
        >
            
          {item}
        </a>
      </li>
    ))}
    <li className="list-inline-item ">
      <AppMenuAvatar />
    </li>
  </ul>
</div>
  )
}

export default AppMenu