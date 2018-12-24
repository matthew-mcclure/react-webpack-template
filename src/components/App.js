import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import About from './About';
import Footer from './footer';
import Home from './home';
import Navigation from './navigation';
import Scrollable from './scrollable';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="master-container">
          <Navigation />

          <div className="content-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/scrollable" component={Scrollable} />
              <Route
                render={function() {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </div>

          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
