
import { take, takeEvery, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SHOP } from 'containers/App/constants';
import { loadShop, shopLoaded, shopLoadingError,loadShopimg } from 'containers/App/actions';

import request from 'utils/request';

import { selectLocationState } from 'containers/App/selectors';

import shopimgSagas from 'containers/Shopimg/sagas';

////////////////////////////////////////////////////////////////////////////////////////
export function* getShop(placeid) {
    //console.log("placeid= "+placeid);
    
    const requestURL = "https://edwardlai3582.com/goo?placeid="+placeid;

    // Call our request helper (see 'utils/request')
    const shop = yield call(request, requestURL);

    if (!shop.err) {
        yield put(shopLoaded(shop));
        if(shop.data.status !== "INVALID_REQUEST" && shop.data.result.photos){
            yield put(loadShopimg(shop.data.result.photos[0].photo_reference));
        }         

    } else {
        yield put(shopLoadingError(shop.err));
    }
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getShopWatcher() {
    while(true){
        let action = yield take(LOAD_SHOP);
        //console.log("getShopWatcher:"+action.placeid);
        yield call(getShop, [action.placeid]);
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* shopData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getShopWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  shopData,
  ...shopimgSagas,    
];