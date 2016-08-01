
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_EP } from 'containers/App/constants';
import { epLoaded, epLoadingError } from 'containers/App/actions';

import request from 'utils/request';
//import { selectUsername } from 'containers/HomePage/selectors';
import { get } from 'firebase-saga';

import { selectLocationState } from 'containers/App/selectors';

export function* getEp() {
    
    const epname = yield select(selectLocationState());
    const epnameArray = epname.locationBeforeTransitions.pathname.split("/");
    const ep = yield call(get, 'eps', epnameArray[epnameArray.length-1].replace(/\_/gi, ' '));
    yield put(epLoaded(ep));
    /*
    if (!ep.err) {
        console.log(ep);  
    } else {
        yield put(epLoadingError(ep.err));
    }
    */
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getEpWatcher() {
  while (yield take(LOAD_EP)) {
    yield call(getEp);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* epData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getEpWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  epData,
];