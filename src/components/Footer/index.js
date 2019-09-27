import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarNav, 
  NavbarToggler, 
  Collapse, 
  NavItem
} from 'mdbreact';

import './index.scss';


class Footer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false,
      };
  this.onClick = this.onClick.bind(this);
  }

  onClick(){
    if (this.state.collapse) {
      document.getElementById("avatar-hearder-img").classList.remove('small');  
    } else {
      document.getElementById("avatar-hearder-img").classList.add('small');
    }
    
    this.setState({
      collapse: !this.state.collapse,
    });
      
  }
  render() {
    return (
      <div className="footer-panel">
        <div className="container">
          <div className="p-3">
            <img src="/styles/imgs/lfa-logo.png" alt="lfa logo" />
          </div>
          <div className="row">
            <div className="col">
              <div className="p-1">
                <NavLink to="#">About</NavLink>
              </div>
              <div className="p-1">
                <NavLink to="#">Advertise on LFA</NavLink>
              </div>
              <div className="p-1">
                <NavLink to="#">Careers</NavLink>
              </div>
              <div className="p-1">
                <NavLink to="#">Fight in the LFA</NavLink>
              </div>
            </div>
            <div className="col">
              <div className="p-1">
                <NavLink to="#">Contact Us</NavLink>
              </div>
            </div>
            <div className="col">
              <div className="p-1">
                <NavLink to="#">Rules and Regulations</NavLink>
              </div>
              <div className="p-1">
                <NavLink to="#">Website Private Policy</NavLink>
              </div>
              <div className="p-1">
                <NavLink to="#">Website Terms of Use</NavLink>
              </div>
            </div>
            <div className="col">
              <div className="download-detail">
                <div className="download-title p-2">Get the App Now!</div>
                <div className="d-flex img-group">
                  <div className="footer-image-wrapper">
                    <NavLink to="#"><img src="/styles/imgs/white-android-logo.png" alt="android image" /></NavLink>
                  
                    <NavLink to="#"><img src="/styles/imgs/mac-white-logo.svg" alt="mac image" /></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;