 
import { take, takeEvery, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_EP, LOAD_SHOP, LOAD_RECORD1, LOAD_RECORD2, LOAD_RECORD3 } from 'containers/App/constants';
import { epLoaded, epLoadingError, 
         loadShop, shopLoaded, shopLoadingError, 
         loadRecord1, record1Loaded, record1LoadingError,
         loadRecord2, record2Loaded, record2LoadingError,
         loadRecord3, record3Loaded, record3LoadingError
       } from 'containers/App/actions';

import request from 'utils/request';
//import { selectUsername } from 'containers/HomePage/selectors';
import { get } from 'firebase-saga';

import { selectLocationState } from 'containers/App/selectors';

import shopSagas from 'containers/Shop/sagas';

export function* getEps() {
    /*
    const epname = yield select(selectLocationState());
    const epnameArray = epname.locationBeforeTransitions.pathname.split("/");
    const ep = yield call(get, 'eps', epnameArray[epnameArray.length-1].replace(/\_/gi, ' '));
    yield put(epLoaded(ep));
    yield put(loadShop(ep.placeid));
    const records = ep.records;
    for(let i=0; i< records.length; i++){
        if(i === 0){
            yield put(loadRecord1(records[0].master_id));    
        }
        else if(i === 1){
            yield put(loadRecord2(records[1].master_id));   
        }  
        else if(i === 2){
            yield put(loadRecord3(records[2].master_id));   
        }  
    }
    */
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getEpsWatcher() {
  while (yield take("LOAD_EPS")) {
    yield call(getEps);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* epsData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getEpsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
    epsData,   
];