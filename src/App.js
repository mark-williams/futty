import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
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
            {routes}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;


