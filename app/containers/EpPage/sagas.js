 
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
    //yield put(loadShop(ep.placeid));
    //console.log("ep=");
    //console.log(ep);
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

////////////////////////////////////////////////////////
export function* getRecord1(master_id) {
    let requestURL = "https://edwardlai3582.com/discogsmaster?masterid="+master_id;
    //discogsrelease
    // Call our request helper (see 'utils/request')
    let record1 = yield call(request, requestURL);

    if (record1.data.statusCode && record1.data.statusCode === 404) {
        //yield put(record3Loaded(record3));
        requestURL = "https://edwardlai3582.com/discogsrelease?id="+master_id;
        record1 = yield call(request, requestURL);
        if (record1.data.statusCode && record1.data.statusCode === 404) {
            yield put(record1LoadingError(record1.err));    
        }
        else{
            yield put(record1Loaded(record1));    
        }
    } else {
        yield put(record1Loaded(record1));
        //yield put(record3LoadingError(record3.err));
    }
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getRecord1Watcher() {
    while(true){
        let action = yield take(LOAD_RECORD1);
        //console.log("getShopWatcher:"+action.placeid);
        yield call(getRecord1, [action.master_id]);
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* record1Data() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getRecord1Watcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getRecord2(master_id) {
    let requestURL = "https://edwardlai3582.com/discogsmaster?masterid="+master_id;
    //discogsrelease
    // Call our request helper (see 'utils/request')
    let record2 = yield call(request, requestURL);

    if (record2.data.statusCode && record2.data.statusCode === 404) {
        //yield put(record3Loaded(record3));
        requestURL = "https://edwardlai3582.com/discogsrelease?id="+master_id;
        record2 = yield call(request, requestURL);
        if (record2.data.statusCode && record2.data.statusCode === 404) {
            yield put(record2LoadingError(record2.err));    
        }
        else{
            yield put(record2Loaded(record2));    
        }
    } else {
        yield put(record2Loaded(record2));
    }
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getRecord2Watcher() {
    while(true){
        let action = yield take(LOAD_RECORD2);
        yield call(getRecord2, [action.master_id]);
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* record2Data() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getRecord2Watcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* getRecord3(master_id) {
    let requestURL = "https://edwardlai3582.com/discogsmaster?masterid="+master_id;
    //discogsrelease
    // Call our request helper (see 'utils/request')
    let record3 = yield call(request, requestURL);

    if (record3.data.statusCode && record3.data.statusCode === 404) {
        //yield put(record3Loaded(record3));
        requestURL = "https://edwardlai3582.com/discogsrelease?id="+master_id;
        record3 = yield call(request, requestURL);
        if (record3.data.statusCode && record3.data.statusCode === 404) {
            yield put(record3LoadingError(record3.err));    
        }
        else{
            yield put(record3Loaded(record3));    
        }
    } else {
        yield put(record3Loaded(record3));
        //yield put(record3LoadingError(record3.err));
    }
}

/**
 * Watches for LOAD_EP action and calls handler
 */
export function* getRecord3Watcher() {
    while(true){
        let action = yield take(LOAD_RECORD3);
        yield call(getRecord3, [action.master_id]);
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* record3Data() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getRecord3Watcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
    epData,
    record1Data,
    record2Data, 
    record3Data, 
    ...shopSagas,   
];