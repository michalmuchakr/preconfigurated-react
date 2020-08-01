import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/shared/nav.jsx";
import Footer from "./components/shared/footer.jsx";
import Home from "./containers/home.jsx";
import Example from "./containers/example.jsx";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/example-page" component={Example} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
