import React, { Component } from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,Image } from "react-bootstrap";
import { Icon,Drawer } from "antd"

import "./navBar.css";

export default class NavBar extends Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <div className="custom-container">
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand> 
                <div>                     
                    <Icon type="menu-unfold" className="menu-icon" onClick={this.showDrawer}/>
                </div>
                <a className='logoImage pb20 center' href="/">
                    <Image className="custom-image" alt="KrossDelivery Logo" src="assets/images/RoyalStayLogo.png" />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                Sign In
                </NavItem>
                <NavItem eventKey={2} href="#">
                Sign Up
                </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    )
  }
}
