import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';  

import DashBoard from "./scenes/dashBoard/dashBoard";
import Home from "./scenes/home/home";

class App extends Component {
  render() {
    return (
      <div>
          <Home />
      </div>
    );
  }
}

export default App;
