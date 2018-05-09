/**
*
* SideBar
*
*/

import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

class SideBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} styles={styles}>
        <NavLink id="home" className="menu-item" to="/">Home</NavLink>
        <NavLink id="foodvenues" className="menu-item" to="/FoodVenues">Hungry</NavLink>
        <NavLink id="drinkvenues" className="menu-item" to="/DrinkVenues">Thirsty</NavLink>
      </Menu>
    );
  }
}

SideBar.propTypes = {

};

export default SideBar;
