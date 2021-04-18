import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import WallPage from './components/WallPage/WallPage';
import './style/CSS/app.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  //redirect first time user only once with cookie
  if (!document.cookie.includes('landingPage=firsTimetVisit4')) {
    window.location.href = '/landing';
  }
  document.cookie =
    'landingPage=firsTimetVisit4; expires=Fri, 31 Dec 9999 23:59:59 GMT';

  return (
    <Router>
      <Switch>
        <Route path='/landing'>
          <LandingPage />
        </Route>
        <Route path='/'>
          <WallPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
