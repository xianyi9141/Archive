import React from 'react';
import { Button } from 'mdbreact';
import IconPanel from '../_components/IconPanel';
import BannerImage from '../_components/BannerImage';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getChampions } from './action';

import './index.scss';

Array.prototype.chunk = function ( n ) {
  if ( !this.length ) {
      return [];
  }
  return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};

class ChampionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.activateDescription = this.activateDescription.bind(this);
  }

  componentWillMount() {
    this.props.getChampions();
  }

  activateDescription(ele, rowNum) {
    if ((ele.parentElement.parentElement.id.indexOf('origin') > -1)
      || (ele.parentElement.parentElement.parentElement.id.indexOf('origin') > -1)) {

        const descirptionElements = document.getElementsByClassName('champion-description');

        for (let i = 0; i < descirptionElements.length; i += 1) {
          descirptionElements[i].classList.add('inactive');
          descirptionElements[i].classList.remove('active');
        }

        const singleElements = document.getElementsByClassName('single-player');

        for (let i = 0; i < singleElements.length; i += 1) {
          singleElements[i].classList.remove('active');
        }

        const targetID = ele.parentElement.parentElement.id 
                      || ele.parentElement.parentElement.parentElement.id;


        if (document.getElementById(targetID).className.indexOf('active') > -1) {
          let elementsShouldbeActive = document.getElementsByClassName('origins');
          // const elementsShouldbeActive = document.getElementsByClassName(targetID.replace('origin', 'target'));
          for (let i = 0; i < elementsShouldbeActive.length; i += 1) {
            elementsShouldbeActive[i].classList.remove('active');
          }

          document.getElementById(targetID).classList.remove('active')
        } else {
          let elementsShouldbeActive = document.getElementsByClassName('origins');
          // const elementsShouldbeActive = document.getElementsByClassName(targetID.replace('origin', 'target'));
          for (let i = 0; i < elementsShouldbeActive.length; i += 1) {
            elementsShouldbeActive[i].classList.remove('active');
          }

          elementsShouldbeActive = document.getElementsByClassName(targetID.replace('origin', 'target'));
          for (let i = 0; i < elementsShouldbeActive.length; i += 1) {
            elementsShouldbeActive[i].classList.remove('inactive');
            elementsShouldbeActive[i].classList.add('active');
          }

          document.getElementById(targetID).classList.add('active')
        }
    }
  }

  chunk(arr, chunkSize) {
    var R = [];
    for (var i=0,len=arr.length; i<len; i+=chunkSize)
      R.push(arr.slice(i,i+chunkSize));
    return R;
  }

  getElementByRow(data, index) {
    let output = [];
    output = data.map((element, idx) => {
      return (
        <div 
          className="origins col-12 col-md-4 mb-4 mt-4" 
          key={'element' + idx} 
          id={ 'origin' + (index * 3 + idx) }
          onClick={(ele) => this.activateDescription(ele.target, index) }
        >
          <div className={ "origins single-player " +  'target' + (index * 3 + idx) }>
            <img src={ element.photo } className="player-avatar" />
            <div className="player-status">
              <div className="name">{ element.name }</div>
              <div className="status">{ element.status }</div>
            </div>
          </div>
        </div>
      )
    });

    return output;
  }

  getDescriptionByRow(data, index) {
    let output = [];

    output = data.map((element, idx) => {
      return (
        <div className={ "origins champion-description " + 'target' + (index * 3 + idx) } key={'description' + idx} id={ 'target' + (index * 3 + idx) }>
          <h1>{ element.name }</h1>
          <div className="d-flex">
            <span className="status">{ element.status }</span>
            <div className="d-flex">
              <span className="m-2 fa fa-facebook-square"></span>
              <span className="m-2 fa fa-twitter"></span>
              <span className="m-2 fa fa-youtube-play"></span>
            </div>
          </div>
          <hr />
          <div className="description d-flex">
            <div className="description-element col-2">
              <div>
                  <span className="label-text">Height</span>
                  <span>{ element.description.height }</span>
              </div>
              <div>
                  <span className="label-text">weight</span>
                  <span>{ element.description.weight }</span>
              </div>
              <div>
                <span className="label-text">Height</span>
                  <span>Height</span>
              </div>
              <div>
                <span className="label-text">Height</span>
                  <span>Height</span>
              </div>
            </div>
            <div className="col-2 description-element">
              <div>
                  <span className="label-text">Height</span>
                  <span>6'2"</span>
              </div>
              <div>
                  <span className="label-text">weight</span>
                  <span>210lbs</span>
              </div>
              <div>
                <span className="label-text">Height</span>
                  <span>Height</span>
              </div>
              <div>
                <span className="label-text">Height</span>
                  <span>Height</span>
              </div>
            </div>
            <div className="col-8 description-element">
              <div>
                  <span className="label-text">Height</span>
                  <span>6'2"</span>
              </div>
              <div>
                  <span className="label-text">weight</span>
                  <span>210lbs</span>
              </div>
              <div>
                <span className="label-text">Height</span>
                  <span>Height</span>
              </div>
              <div>
                <span className="label-text">Height</span>
                <span>Height</span>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return output;
  }


  render () {

    var champions = this.props.champions || []; 

    var showData = this.chunk(champions, 3);
    var outputData = [];

    showData.map((data, idx) => {
      let tmp = this.getElementByRow(data, idx);
      let description = this.getDescriptionByRow(data, idx);
      outputData.push(
        <div className="row" key={'row' + idx} id={'row' + idx}>
          { tmp }
          { description }
        </div>
      )
    })

    return (
      <div>
        <div className="homepage">
          {/* champion body */}
          <div className="champion-title-wrapper">
            <img src="/styles/imgs/champion-title.png" />
          </div>
          <div className="champion-body">
            <div className="container">
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
      bindActionCreators({getChampions}, dispatch)
    );
  }

  const mapStateToProps = state => {
    console.log(state);
    return {
      state: state,
      champions: state.champions.champions
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ChampionsPage);