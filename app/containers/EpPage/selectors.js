/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectEp = () => (state) => state.get('ep');


export {
  selectEp,
};
