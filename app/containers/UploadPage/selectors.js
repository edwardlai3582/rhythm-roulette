/**
 *   Eppage selectors
 */

import { createSelector } from 'reselect';

const selectAuth   = () => (state) => state.get('auth');

const selectEpsData   = () => createSelector(
  selectEps(),
  //(epState) => epState.getIn(['epData', 'ep'])     
);

export {
  selectAuth
};
   