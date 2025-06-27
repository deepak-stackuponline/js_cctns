import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppMenuAvatar from './AppMenuAvatar';
import './AppMenu.css';

function AppMenu() {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([]);
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    fetch("https://mocki.io/v1/4cd0ada5-469f-4526-a4d5-bc3ad31a6785")
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => {
        console.error("Error fetching menu items:", error);
        setMenuItems([]);
      });
  }, []);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <div className="primary-color p-3 d-flex align-items-center justify-content-end">
      <ul className="list-inline m-0 d-flex align-items-center">
        {menuItems.map((item, index) => (
          <li key={item.name + index} className="list-inline-item px-1">
            <Link 
              to={item.route} 
              className={`text-decoration-none menu-link ${
                activeRoute === item.route ? 'text-dark active' : 'text-secondary'
              }`}
              onClick={() => setActiveRoute(item.route)}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="list-inline-item">
          <AppMenuAvatar />
        </li>
      </ul>
    </div>
  );
}

export default AppMenu;
