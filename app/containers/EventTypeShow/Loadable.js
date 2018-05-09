/**
 *
 * Asynchronously loads the component for EventTypeShow
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
