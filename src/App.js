
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from 'react-router-dom';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">
        <NavBar id='navbar'/>
        <Outlet/>
    </div>
  );
}

export default App;
