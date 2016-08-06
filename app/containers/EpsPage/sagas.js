/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_RRSFORSORT } from 'containers/App/constants';
import { rrsForSortLoaded, rrsForSortLoadingError } from 'containers/App/actions';

import request from 'utils/request';

import { getAll, get } from 'firebase-saga';

export function* getEps() {
    const rhythmroulettes = yield call(getAll, 'rhythmroulettes');
    
    const youtubeurlPre = "https://www.googleapis.com/youtube/v3/videos?id=";
    const youtubeurlPost = "&key=AIzaSyABOvyyjtmu4ioGemSRy4SJcjtBU5DUsqA&part=statistics";
    
    for(let i=0; i<rhythmroulettes.length; i++){
        //yield call(getYoutube, [i, rhythmroulettes[i].youtubeId]);
        let youtubeData = yield call(request, youtubeurlPre+rhythmroulettes[i].youtubeId+youtubeurlPost);
        //yield put(addYoutube(i, youtubeData));
        console.log(youtubeData);
        rhythmroulettes[i].youtubeData = youtubeData;
    }    
    
    yield put(rrsForSortLoaded({rhythmroulettes:rhythmroulettes}));
}

/**
 * Watches for LOAD_REPOS action and calls handler
 */
export function* getEpsWatcher() {
  while (yield take(LOAD_RRSFORSORT)) {
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
  epsData    
];
