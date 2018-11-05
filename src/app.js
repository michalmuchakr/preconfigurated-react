import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
}  from 'react-router-dom';

import Nav from './components/shared/nav';
import Footer from './components/shared/footer';
import Home from './containers/home';
import HeroPage from './containers/hero_page';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/hero-page' component={HeroPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
