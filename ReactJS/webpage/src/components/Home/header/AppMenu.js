import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppMenuAvatar from './AppMenuAvatar';
import './AppMenu.css';

function AppMenu() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');
  const [menuItems, setMenuItems] = useState([]);

  // Define menu items with their routes - Updated to match your requirements
  const menuRoutes = {
    'Home': '/',
    'Browse Books': '/browse',
    'List a Book': '/list',
    'Get Recommendations': '/recommendations',
    'Profile': '/profile'
  };

  // Update active item based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = Object.keys(menuRoutes).find(key => menuRoutes[key] === currentPath);
    if (currentItem) {
      setActiveItem(currentItem);
    }
  }, [location.pathname]);

  async function fetchData() {
    try {
      const response = await fetch("https://mocki.io/v1/f90f1151-463b-4108-8dda-00cb5e11dbe1");
      
      const data = await response.json();
      setMenuItems(data); 
    } catch (error) {
      console.error("Error fetching data:", error);
      // Fallback to default menu items if API fails - Updated to match your requirements
      setMenuItems(['Home', 'Browse Books', 'List a Book', 'Get Recommendations', 'Profile']);
    }
  }

  useEffect(() => {     
    fetchData();
  }, []);

  return (
    <div className="primary-color p-3 d-flex align-items-center justify-content-end">
      <ul className="list-inline m-0 d-flex align-items-center">
        {menuItems.map((item, index) => (
          <li key={`${item}-${index}`} className="list-inline-item px-1">
            <Link 
              to={menuRoutes[item] || '/'}
              className={`text-decoration-none menu-link ${activeItem === item ? 'text-dark active' : 'text-secondary'}`}
              onClick={() => setActiveItem(item)}  
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="list-inline-item ">
          <AppMenuAvatar />
        </li>
      </ul>
    </div>
  )
}

export default AppMenu;