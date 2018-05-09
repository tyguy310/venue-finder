/**
 *
 * Asynchronously loads the component for FoodVenues
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
