import React, { useState} from 'react';
import AppMenuAvatar from './AppMenuAvatar';
import './AppMenu.css';

function AppMenu() {
  const [activeItem, setActiveItem] = useState('Home');

  const [menuItems, setMenuItems] = useState([]);




    async function fetchData() {
      try {
        const response = await fetch("https://mocki.io/v1/08252512-b32e-45cc-a3d8-0bb4db9d0760");
        //const response = await fetch("https://mocki.io/v1/3f6a090a-72bd-4457-bd30-afd109eb7a5f");
        
        const data = await response.json();
        setMenuItems(data.menuItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();








  // const menuItems = [
  //   'Home',
  //   'Browse Books',
  //   'List a Book',
  //   'Get Recommendations',
  //   'Profile',
  //   'Name'
  // ];

  


  return (
<div className="primary-color p-3 d-flex align-items-center justify-content-end">
  <ul className="list-inline m-0 d-flex align-items-center">
    {menuItems.map((item) => (
      

      <li key = {item} className="list-inline-item px-1">

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