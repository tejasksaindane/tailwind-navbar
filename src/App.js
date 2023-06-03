import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


//TODO: import the components
import Homepage from "./Pages/HomePage";

//TODO: import the Css
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </div>
  );
};

export default App;
