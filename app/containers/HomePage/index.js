/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const H1 = styled.h1`
  font-family: 'Fontdiner Swanky', cursive;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 2rem;
  border: 2px solid #520e6f;
  margin: 0 2rem;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(82,14,111,0.3);
  transition: .3s;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(82,14,111,0.5);
  }
`;

const Buttons = styled.ul`
  width: 100%;
  text-align: center;
  padding: 2rem;
`;

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Buttons>
          <StyledLink to="/HappyHour">Happy Hour</StyledLink>
          <StyledLink to="/LateNight">Late Night</StyledLink>
          <StyledLink to="/DailySpecials">Daily Specials</StyledLink>
          <StyledLink to="/Brunch">Brunch</StyledLink>
        </Buttons>
      </div>
    );
  }
}
