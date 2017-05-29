import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import League from './components/League';
import Team from './components/Team';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Futty</h2>
          <p>Get your football stats here!</p>
        </div>
        <div className="content">
          <Router>
            <div>
              <Route path="/league" component={League} />
              <Route path="/team" component={Team} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

 {/*<Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/league" component={League} />
      <Route path="/team" component={Team} />
    </div>
  </Router>,*/}