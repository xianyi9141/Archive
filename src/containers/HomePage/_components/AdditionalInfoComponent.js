import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'mdbreact';


class AdditionalInfoComponent extends React.Component {
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
      <div className="">
        <div className="row panel additional-info-wrapper">
          <span className="white-line top-line"></span>
          <span className="white-line bottom-line"></span>
          <div className="col"></div>
          <div className="col col-8">
            <div className="row">
              <div className="col-12 col-md-6">
                <NavLink to=""><img src="/styles/imgs/boys.png" /></NavLink>
                <div className="additional-title text-center p-4"><h2>ALL LEGACY FIGHTERS</h2></div>
              </div>
              <div className="col-12 col-md-6 text-center">
                <div className="additional-title text-center p-3 girl-title-top"><h2>RING GIRLS</h2></div>
                <NavLink to=""><img src="/styles/imgs/girls.png" /></NavLink>
                <div className="additional-title text-center p-4 girl-title-bottom"><h2>RING GIRLS</h2></div>
                <span className="white-line"></span>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      
    );
  }
}

export default AdditionalInfoComponent;
