import "./App.css";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderSection from "./components/Home/header/HeaderSection";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterFixed from "./components/Home/footer/FooterFixed";



function App() {
  return (
    <Router>
      <div className="hide-scrollbar App-custom" style={{ overflowY: 'scroll', height: '100vh' }}>
        <div className="container"> 
          <HeaderSection />
        </div>
        <div>
          <AppRoutes />
        </div>
       <div>
        <FooterFixed />
       </div>
      </div>
    </Router>
  );
}

export default App;
