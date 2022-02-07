import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './components/shared/nav';
import Footer from './components/shared/footer';
import Home from './containers/home';
import HeroPage from './containers/hero-page';

const App = (): JSX.Element => (
  <Router>
    <div className="app">
      <Nav />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero-page" element={<HeroPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
