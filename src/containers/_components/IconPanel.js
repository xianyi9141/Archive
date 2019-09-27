import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'mdbreact';

import './index.scss';


class IconPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="icon-panel">
        <div className="panel logo-list text-center p-2">
          <div className="p-4 info-text">LFA is brought to you in these part of great sponsors</div>
          <div className="p-2 d-flex justify-content-center" >
            <NavLink className="logo-list__item" to="#">
              <img src="/styles/imgs/amazon-logo.svg" alt="amazon logo" />
            </NavLink>
            <NavLink className="logo-list__item" to="#">
              <img src="/styles/imgs/mac-black-logo.svg" alt="apple logo" />
            </NavLink>
            <NavLink className="logo-list__item" to="#">
              <img src="/styles/imgs/bitcoin-logo.svg" alt="bitcoin logo" />
            </NavLink>
          </div>
          <div className="p-4 info-text">They support MMA, so let's support them</div>
        </div>
      </div>
      
    );
  }
}

export default IconPanel;