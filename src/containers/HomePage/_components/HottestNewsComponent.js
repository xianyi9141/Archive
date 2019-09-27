import React from 'react';
import Slider from 'react-slick';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getHottestNews } from '../action';
import { HottestItem } from '../../../components';


class HottestNewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getHottestNews();
  }
  
  render () {
    const settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
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

    const mockData = Object.assign([], this.props.hottestNews);

    return (
      <div className="container">
        <div>
          <h2 className="news-title text-uppercase"> Hottest News </h2>
        </div>
        <Slider {...settings}>
          { 
            mockData.map((element, idx) => {
              return (
                <div key={ idx }>
                  <HottestItem data={element} />
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
      bindActionCreators({getHottestNews}, dispatch)
    );
  }

  const mapStateToProps = state => {
    console.log(state);
    return {
      state: state,
      hottestNews: state.home.hottestNews
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HottestNewsComponent);
