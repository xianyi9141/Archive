import React from 'react';
import { Button } from 'mdbreact';
import LatestNewsComponent from './_components/LatestNewsComponenet';
import HottestNewsComponent from './_components/HottestNewsComponent';
import AdditionalInfoComponent from './_components/AdditionalInfoComponent';
import IconPanel from '../_components/IconPanel';
import BannerImage from '../_components/BannerImage';
import { NavLink } from "react-router-dom";

import './index.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="homepage">
          <BannerImage />
          {/* Begine for Latest News Panel */}
          <div className="panel latest-news-wrapper">
            <LatestNewsComponent />
          </div>

          {/* Begine for Hottest Video Panel */}
          <div className="panel hottest-news-wrapper">
            <HottestNewsComponent />
          </div>

          {/* Begine for Additional Infomation Panel */}
          <AdditionalInfoComponent />

          <IconPanel />
        </div>
      </div>
    );
  }
}

export default HomePage;
