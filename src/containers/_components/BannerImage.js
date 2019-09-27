import React from 'react';
import Slider from 'react-slick';
import { NavLink, Button } from 'mdbreact';

import './index.scss';


class BannerImage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className="head-image-wrapper">
        {/* Begine for big image panel */}
        <div className="image-container"></div>
        <div className="buy-ticket-wrapper">
          <h1 className="lfa-title">LFA 48</h1>
          <h4 className="lfa-description">Live From Nebraska</h4>
          <Button 
            className="buy-ticket"
            size="lg" 
            id="buy-ticket" 
            color="yellow"
          >
            Buy Tickets Now
          </Button>
          <div className="logo-wrapper d-flex">
            <div className="logo-image-wrapper d-flex">
              <NavLink to=""><img src="/styles/imgs/white-android-logo.png" /></NavLink>
              <NavLink to=""><img src="/styles/imgs/mac-white-logo.svg" /></NavLink>
            </div>
          </div>
          <div className="header-description">
            Or get the app and stream live to catch up
            <br />
            with the latest news, media and more!
          </div>
        </div>
      </div>
      
    );
  }
}

export default BannerImage;