import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_RRSFORSORT } from 'containers/App/constants';
//import { rrsForSortLoaded, rrsForSortLoadingError } from 'containers/App/actions';
import 'firebase';

import request from 'utils/request';

/*
export function* getEps() {
    const rhythmroulettes = yield call(getAll, 'rhythmroulettes');

    const youtubeUrl = "https://edwardlai3582.com/youtube?id="
    let callArray=[];
    for(let i=0; i<rhythmroulettes.length; i++){
        callArray.push(call(request, youtubeUrl+rhythmroulettes[i].youtubeId));
    }      
    let callArrayResult = yield callArray;
    for(var i=0; i<callArrayResult.length; i++){
        rhythmroulettes[i].youtubeData = callArrayResult[i];    
    }
    yield put(rrsForSortLoaded({rhythmroulettes:rhythmroulettes}));
}
export function* getEpsWatcher() {
  while (yield take(LOAD_RRSFORSORT)) {
    yield call(getEps);
  }
}
export function* epsData() {
  const watcher = yield fork(getEpsWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  epsData    
];
*/
function* signIn(authProvider) {
  try {
    const authData = yield call([firebaseAuth, firebaseAuth.signInWithPopup], authProvider);
    yield put(authActions.signInFulfilled(authData.user));
    yield history.push('/');
  }
  catch (error) {
    yield put(authActions.signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(authActions.signOutFulfilled());
    yield history.replace('/sign-in');
  }
  catch (error) {
    yield put(authActions.signOutFailed(error));
  }
}


//=====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN);
    yield fork(signIn, payload.authProvider);
  }
}

function* watchSignOut() {
  while (true) {
    yield take(authActions.SIGN_OUT);
    yield fork(signOut);
  }
}


//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
];