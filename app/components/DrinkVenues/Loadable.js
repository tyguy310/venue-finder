/**
 *
 * Asynchronously loads the component for DrinkVenues
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
