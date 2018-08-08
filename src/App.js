import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';  

import DashBoard from "./scenes/dashBoard/dashBoard";
import Home from "./scenes/home/home";
import NavBar from "./scenes/navBar/navBar";
import Navbar from './scenes/navBar/navBar';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
      </div>
    );
  }
}

export default App;
