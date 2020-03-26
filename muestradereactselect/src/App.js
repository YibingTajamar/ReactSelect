import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStates from "./components/DemoStates";
import DemoSelectMultiple from "./components/DemoSelectMultiple";
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Router from "./Router";
import MenuPrincipal from "./components/MenuPrinciapa";
function App() {
  return (
    <div className="App">
       <MenuPrincipal></MenuPrincipal>
      <div style={{ width: "500px", margin: "20px auto" }}>
        <Router></Router>
      </div>
            
    </div>
  );
}

export default App;
