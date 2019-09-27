import React from 'react';
import { Button } from 'mdbreact';
import IconPanel from '../_components/IconPanel';
import BannerImage from '../_components/BannerImage';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSchedules } from './action';

import './index.scss';

Array.prototype.chunk = function ( n ) {
  if ( !this.length ) {
      return [];
  }
  return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};

class SchedulePage extends React.Component {
  constructor(props) {
    super(props);

    this.activateDescription = this.activateDescription.bind(this);
  }

  componentWillMount() {
    this.props.getSchedules();
  }

  activateDescription(ele, rowNum) {
    const targetID = 'target' + rowNum;
    const originalElements = document.getElementsByClassName('main-panel');
    const targetElements = document.getElementsByClassName('target-elements');

    if (document.getElementById(targetID).className.indexOf('active') == -1) {
      for (let i = 0; i < originalElements.length; i += 1) {
        originalElements[i].classList.remove('active');
      }

      document.getElementById(targetID.replace('target', 'row')).classList.add('active');

      for (let i = 0; i < targetElements.length; i += 1) {
        targetElements[i].classList.remove('active');
      }

      document.getElementById(targetID).classList.add('active');
    } else {

      document.getElementById(targetID.replace('target', 'row')).classList.remove('active');
      document.getElementById(targetID).classList.remove('active');

    }

  }

  chunk(arr, chunkSize) {
    var R = [];
    for (var i=0,len=arr.length; i<len; i+=chunkSize)
      R.push(arr.slice(i,i+chunkSize));
    return R;
  }


  render () {

    var showData = this.props.schedules || [];
    var outputData = [];

    showData.map((data, idx) => {
      outputData.push(
        <div className="schedule-item">
          <div 
            className="row main-panel" 
            onClick={(e) => this.activateDescription(e.target, idx)}
            key={'row' + idx} 
            id={'row' + idx}>
            <div className="col-1 day d-flex">
              <div className="margin-auto">
                <div>{data.date}</div>
                <div>{data.month}</div>
              </div>
            </div>
            <div className="col-8 d-flex detail">
              <div className="p-2">
                <div className="detail-header-panel">
                  <span>{data.day}</span>
                  <span>{data.startTime}</span>
                  <span className="no-padding">-</span>
                  <span>{data.endTime}</span>
                </div>
                <div className="detail-footer-panel">
                  <span>{data.location}</span>
                  <span>{data.detail}</span>
                  <span>{data.doorPrice}</span>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex versus">
              <div className="image-wrapper"><img src={data.homePlayer.photo} /></div>
              <div className="p-2"><h2>VS.</h2></div>
              <div className="image-wrapper"><img src={data.awayPlayer.photo} /></div>
            </div>
          </div>
          <div className="row target-elements" id={ 'target' + idx } >
            <div className="first-part">
              <div className="spam-text">Lorem ipsum</div>
              <div className="spam-text">Lorem ipsum</div>
              <div className="spam-text">Lorem ipsum</div>
            </div>
            <div className="second-part">{data.description}</div>
            <div className="third-part versus-name">
              <div className="versus-name-title">{data.homePlayer.name}</div>
              <div className="versus-name-title"><strong>VS.</strong></div>
              <div className="versus-name-title">{data.homePlayer.name}</div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className="homepage">
          {/* champion body */}
          <div className="schedule-title-wrapper">
            <img src="/styles/imgs/schedule-title.jpg" />
          </div>
          <div className="schedule-body">

            <div className="container">
              <h2 className="event-dates">Event Dates</h2>
              {
                outputData
              }
            </div>
          </div>
          <BannerImage />
          <IconPanel />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({getSchedules}, dispatch)
    );
  }

  const mapStateToProps = state => {
    console.log(state);
    return {
      state: state,
      schedules: state.schedules.schedules
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);