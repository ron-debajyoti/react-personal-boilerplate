import React from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Learn React for the dummies working out in the hoood
      </a>
    </header>
  </div>
);

export default App;
