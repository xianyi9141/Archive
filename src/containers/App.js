/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import {
  HomePage,
  ChampionsPage,
  SchedulePage,
  AboutPage,
  NotFoundPage
} from './index';
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { Header, Footer } from '../components/index';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid no-padding">
        <Header />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/champions" component={ChampionsPage} />
          <Route path="/schedules" component={SchedulePage} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
