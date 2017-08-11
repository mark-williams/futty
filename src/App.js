import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './style/App.css';
import routes from './routes';
import { colours } from './style';

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

const Navigation = styled.div`
  background-color: ${colours.secondary};
  height: 20px;
  padding: 4px;
  color: #fff;
  text-align: left;
  a {
    color: #fff;
    text-decoration: none;
  }
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
          <div>
            <Navigation>
              <NavLink to={'/'}>Home</NavLink>
            </Navigation>
            {routes}
          </div>
         </Router>
      </AppStyle>
    );
  }
}

export default App;


