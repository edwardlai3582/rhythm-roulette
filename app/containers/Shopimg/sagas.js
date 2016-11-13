
import { take, takeEvery, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SHOPIMG } from 'containers/App/constants';
import { loadShopimg, shopimgLoaded, shopimgLoadingError } from 'containers/App/actions';

import request from 'utils/request';

import { selectLocationState } from 'containers/App/selectors';
////////////////////////////////////////////////////////////////////////////////////////
export function* getShopimg(photo_reference) {
    //console.log("placeid= "+placeid);
    
    const requestURL = "https://edwardlai3582.herokuapp.com/goophoto?photoreference="+photo_reference;

    // Call our request helper (see 'utils/request')
    const shopimg = yield call(request, requestURL);
    //console.log(shopimg);
    if (!shopimg.err) {
        yield put(shopimgLoaded(shopimg));
    } else {
        yield put(shopimgLoadingError(shopimg.err));
    }
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getShopimgWatcher() {
    while(true){
        let action = yield take(LOAD_SHOPIMG);
        //console.log("getShopWatcher:"+action.placeid);
        yield call(getShopimg, [action.photo_reference]);
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* shopimgData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getShopimgWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  shopimgData    
];