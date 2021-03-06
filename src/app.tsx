import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/shared/nav.jsx';
import Footer from './components/shared/footer.jsx';
import Home from './containers/home';
import HeroPage from './containers/hero-page';

const App: FunctionComponent = (): JSX.Element => (
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
