import { createSelector } from 'reselect';

/**
 * Direct selector to the eventTypeShow state domain
 */
const selectEventTypeShowDomain = (state) => state.get('eventTypeShow');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EventTypeShow
 */

const makeSelectEventTypeShow = () => createSelector(
  selectEventTypeShowDomain,
  (substate) => substate.toJS()
);

export default makeSelectEventTypeShow;
export {
  selectEventTypeShowDomain,
};
