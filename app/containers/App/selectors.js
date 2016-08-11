/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectCurrentUser = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('currentUser')
);

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
);

const selectRrs = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['rrData', 'rhythmroulettes'])
);

const selectRrsForSort = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['rrForSortData', 'rhythmroulettes'])
);

const selectRrsForSortLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('rrForSortLoading')
);

const selectEp = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['epData', 'ep'])
);

const selectShop = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['shopData', 'shop'])
);

const selectShopLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('shoploading')
);

const selectShopimg = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['shopimgData', 'shopimg'])
);

const selectShopimgLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('shopimgloading')
);

const selectRecord1 = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['record1Data', 'record1'])
);

const selectRecord1Loading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('record1loading')
);

const selectRecord2 = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['record2Data', 'record2'])
);

const selectRecord2Loading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('record2loading')
);

const selectRecord3 = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn(['record3Data', 'record3'])
);

const selectRecord3Loading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('record3loading')
);
///////////////////////////////////////////////////////////////////////////////////
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
    selectGlobal,
    selectCurrentUser,
    selectLoading,
    selectError,
    selectLocationState,
    selectRrs,
    selectRrsForSort,
    selectRrsForSortLoading,    
    selectEp,
    selectShop,
    selectShopLoading,    
    selectShopimg,
    selectShopimgLoading, 
    selectRecord1,
    selectRecord1Loading,
    selectRecord2,
    selectRecord2Loading,
    selectRecord3,
    selectRecord3Loading,        
};
