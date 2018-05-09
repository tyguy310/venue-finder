/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WebFont from 'webfontloader';

import HomePage from 'containers/HomePage/Loadable';
import FoodVenues from 'components/FoodVenues/Loadable';
import DrinkVenues from 'components/DrinkVenues/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SideBar from 'components/SideBar';

export default function App() {
  WebFont.load({
    google: {
      families: ['Nunito', 'Fontdiner Swanky', 'sans-serif'],
    },
  });
  return (
    <div id="outer-container">
      <SideBar />
      <main id="page-wrap" >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/FoodVenues" component={FoodVenues} />
          <Route path="/DrinkVenues" component={DrinkVenues} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
