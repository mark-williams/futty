import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colours } from '../style';
import routes from '../routes';

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

const RouteContainer = () => (
   <div>
    <Navigation>
      <NavLink to={'/'}>Home</NavLink>
    </Navigation>
    {routes}
  </div>
);

export default RouteContainer;
