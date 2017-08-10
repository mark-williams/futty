import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colours from './colours';

const TeamLink = styled(Link)`
  text-decoration: none;
  color: ${colours.primaryFont};
  &:visited {
    color: ${colours.primaryFont};
  };
  &:hover {
    color: ${colours.secondary};
  };
`;

export default TeamLink;
