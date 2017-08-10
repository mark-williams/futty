import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import './style/App.css';

const Container = styled.div`
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
      <Container>
        <Header>
          <h2>Welcome to Futty</h2>
          <p>Get your football stats here!</p>
        </Header>
        <div>
          <Router>
            {routes}
          </Router>
        </div>
      </Container>
    );
  }
}

export default App;


