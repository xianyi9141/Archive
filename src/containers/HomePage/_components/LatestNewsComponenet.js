import React from 'react';
import Slider from 'react-slick';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getLatestNews } from '../action';

class LatestNewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getLatestNews();
  }
  
  render () {
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const data = Object.assign([], this.props.latestNews);

    return (
      <div className="container latest-news-panel">
        <div>
          <h2 className="news-title text-uppercase"> Latest News </h2>
        </div>
        <Slider {...settings}>
          {
            data.map((element, idx) => {
              return (
                <div className="card" key={ idx }>
                  <div className="card-body">
                    <div className="card-img-wrapper">
                      <img src={element.src} alt="latest image" />
                    </div>
                    <h5 className="card-title">{ element.title }</h5>
                    <p className="card-text">{ element.produced_by }</p>
                    <p className="card-text">{ element.description }</p>
                  </div>
                  <div className="card-footer" >
                    <span className="card-text read-more">READ MORE</span>
                    <span className="detail-link-btn"><i className="fa fa-arrow-right"></i></span>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({getLatestNews}, dispatch)
    );
  }

  const mapStateToProps = state => {
    return {
      state: state,
      latestNews: state.home.latestNews
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LatestNewsComponent);
