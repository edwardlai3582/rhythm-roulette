/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS, LOAD_RRS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError, rrsLoaded, rrsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { selectUsername } from 'containers/HomePage/selectors';

import customData from './data.json';

import { getAll, get } from 'firebase-saga';
/*
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyABOvyyjtmu4ioGemSRy4SJcjtBU5DUsqA",
    authDomain: "rhythmroulette-78b71.firebaseapp.com",
    databaseURL: "https://rhythmroulette-78b71.firebaseio.com",
    storageBucket: "rhythmroulette-78b71.appspot.com",    
};
firebase.initializeApp(config);
*/
/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(selectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // Call our request helper (see 'utils/request')
  const repos = yield call(request, requestURL);

  if (!repos.err) {
    yield put(reposLoaded(repos.data, username));
  } else {
    yield put(repoLoadingError(repos.err));
  }
}

/**
 * Watches for LOAD_REPOS action and calls handler
 */
export function* getReposWatcher() {
  while (yield take(LOAD_REPOS)) {
    yield call(getRepos);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getReposWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Github repos request/response handler
 */
export function* getRrs() {
  /*    
  const requestURL = "./data.json";
  const rrs = yield call(request, requestURL);

  if (!rrs.err) {
    yield put(rrsLoaded(rrs.data));
  } else {
    yield put(rrsLoadingError(rrs.err));
  }
  */
/*
var eee=""    
var qq =Firebase.database().ref('rhythmroulettes').once('value').then(function(snapshot) {
    eee=snapshot.val();
    console.log(eee);
});  
*/  
    //const ref = firebase.database().ref('rhythmroulettes');
    //const data = yield call([ref, ref.once], 'value');
    //const qq= yield data.then(function(snapshot) {
    //    return snapshot.val();
    //}, function(error){return error});  
    //yield put(rrsLoaded(qq));
     const rhythmroulettes = yield call(getAll, 'rhythmroulettes');
        yield put(rrsLoaded({rhythmroulettes:rhythmroulettes}));
  /*    
  console.log(customData);    
  yield put(rrsLoaded(customData));
  */
}

/**
 * Watches for LOAD_REPOS action and calls handler
 */
export function* getRrsWatcher() {
  while (yield take(LOAD_RRS)) {
    yield call(getRrs);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* rrsData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getRrsWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Bootstrap sagas
export default [
  githubData,
  rrsData    
];
