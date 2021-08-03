import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/shared/nav';
import Footer from './components/shared/footer';
import Home from './containers/home';
import HeroPage from './containers/hero-page';

const App = (): JSX.Element => (
  <Router>
    <div className="app">
      <Nav />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hero-page" component={HeroPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
