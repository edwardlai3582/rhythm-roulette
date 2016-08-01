/**
 *   Eppage selectors
 */

import { createSelector } from 'reselect';

const selectEp   = () => (state) => state.get('ep');

const selectEpData   = () => createSelector(
  selectEp(),
  //(epState) => epState.getIn(['epData', 'ep'])     
);

export {
  selectEp,
  selectEpData,
};
   