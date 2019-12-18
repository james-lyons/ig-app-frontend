import React from "react";
// import { withRouter } from 'react-router-dom';
import NavBar from "./components/Layout/NavBar";
import Routes from "./config/routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
