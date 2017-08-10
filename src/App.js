import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import RouteContainer from './components/RouteContainer';
import './style/App.css';

const AppStyle = styled.div`
  text-align: center;
  color: hsl(0, 0%, 32%);
  font-size: 16px;
`;

const Header = styled.div`
  background-color: hsl(0, 100%, 19%);
  height: 70px;
  padding: 20px;
  color: hsl(0, 0%, 91%);
`;

class App extends Component {
  render() {
    return (
      <AppStyle>
        <Header>
          <h2>Welcome to Futty</h2>
          <p>Get your football stats here!</p>
        </Header>
        <Router>
          <Route path="/" component={RouteContainer} />
         </Router>
      </AppStyle>
    );
  }
}

export default App;


