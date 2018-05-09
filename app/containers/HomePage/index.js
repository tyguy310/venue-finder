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

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <div>
          <Link to="/FoodVenues">Food</Link>
          <Link to="/DrinkVenues">Drink</Link>
        </div>
      </div>
    );
  }
}
