/**
 *   Eppage selectors
 */

import { createSelector } from 'reselect';

const selectEps   = () => (state) => state.get('eps');

const selectEpsData   = () => createSelector(
  selectEps(),
  //(epState) => epState.getIn(['epData', 'ep'])     
);

export {
  selectEps,
  selectEpsData,
};
   