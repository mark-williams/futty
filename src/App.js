import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import { colours } from './style';
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

const Navigation = styled.div`
  background-color: ${colours.secondary};
  height: 20px;
  padding: 4px;
  color: #fff;
  text-align: left;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <h2>Welcome to Futty</h2>
          <p>Get your football stats here!</p>
        </Header>
        <Router>
          <Route path="/" component={MainContainer}>
           
          </Route>
         </Router>
        
      </Container>
    );
  }
}

const MainContainer = (props) => (
   <div>
     <Nav />
     {routes}
  </div>
);

const Nav = () => (
  <Navigation>
    <NavLink to={'/'}>Home</NavLink>
  </Navigation>
);

export default App;


