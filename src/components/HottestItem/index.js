import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'mdbreact';
import { Video } from '../index';


class HottestItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const { title, src, description, produced_by } = this.props.data;
    return (
      <div className="card hottest-item">
        <h5 className="card-title"> { title } </h5>
        <div className="video-tag">
            <Video src={src} />
        </div>
        <div className="pt-4">
          <p className="card-text"> { produced_by } </p>
          <p className="card-text"> { description } </p>
        </div>
      </div>
      
    );
  }
}

export default HottestItem;
