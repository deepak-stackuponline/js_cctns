import "./App.css";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderSection from "./components/Home/header/HeaderSection";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App-custom">
        <div className="container">
          <HeaderSection />
        </div>
        <div>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
