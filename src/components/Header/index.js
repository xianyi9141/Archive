import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarNav, 
  NavbarToggler, 
  Collapse, 
  NavItem, 
  NavLink
} from 'mdbreact';

import './index.scss';


class Header extends React.Component {
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

  onChangeActive(e) {
    const descirptionElements = document.getElementsByClassName('nav-item');

    for (let i = 0; i < descirptionElements.length; i += 1) {
      descirptionElements[i].classList.remove('active');
    }

    document.getElementsByClassName("bottom-header")[0].classList.add('minimize');

    setTimeout(() => {
      document.getElementsByClassName("bottom-header")[0].classList.remove('minimize');
    }, 300)

    e.parentElement.classList.add('active');

    
  }


  render() {
    return (
      <div className="hearder-container">
        <div className="top-header"></div>
        <div className="navbar-container">
          <Navbar color="white" dark expand="lg" className="bottom-header" sticky="top" scrolling>
              <NavbarBrand href="/">
                  <a href="/"><img id="avatar-hearder-img" className="avatar-img" src="/styles/imgs/avatar-img.png" alt="avatar image" /></a>
              </NavbarBrand>
              { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
              <Collapse isOpen = { this.state.collapse } navbar>
                  <NavbarNav right>
                    <NavItem active>
                        <NavLink to="/" className="text-uppercase" onClick={(e) => this.onChangeActive(e.target) }>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/schedules" className="text-uppercase" onClick={(e) => this.onChangeActive(e.target) }>Schedule</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/champions" className="text-uppercase" onClick={(e) => this.onChangeActive(e.target) }>Champions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#" className="text-uppercase" onClick={(e) => this.onChangeActive(e.target) }>Hall of Legacies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#" className="text-uppercase" onClick={(e) => this.onChangeActive(e.target) }>Official Store</NavLink>
                    </NavItem>
                  </NavbarNav>
              </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;