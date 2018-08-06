import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';  

import DashBoard from "./scenes/dashBoard/dashBoard";

class App extends Component {
  render() {
    return (
      <div>
          <DashBoard />
      </div>
    );
  }
}

export default App;
