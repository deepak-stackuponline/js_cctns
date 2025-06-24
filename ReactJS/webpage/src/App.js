import "./App.css";
import "./App.scss";
import React from "react";
import HeaderSection from "./components/header/HeaderSection";
import BodySection from "./components/body/BodySection";
import FooterSection from "./components/footer/FooterSection";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App-custom">
      <div className="container">
        <HeaderSection />
      </div>
      <div>
        <BodySection />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
