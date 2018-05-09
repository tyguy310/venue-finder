
import { fromJS } from 'immutable';
import eventTypeShowReducer from '../reducer';

describe('eventTypeShowReducer', () => {
  it('returns the initial state', () => {
    expect(eventTypeShowReducer(undefined, {})).toEqual(fromJS({}));
  });
});
