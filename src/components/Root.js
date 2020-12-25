import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AdoptMain from '../components/AdoptMain';
import '../index.css'

export default class Root extends Component {
  render() {
    return (
      <main>
        <Link to="/">
          <h1 className="site-header">ADOPTr</h1>
        </Link>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/adopt'} component={AdoptMain} />
      </main>
    );
  }
}