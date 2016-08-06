/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_RRS } from 'containers/App/constants';
import { rrsLoaded, rrsLoadingError, 
         loadRrsForSort, rrsForSortLoaded, rrsForSortLoadingError
       } from 'containers/App/actions';

import request from 'utils/request';

import { getAll, get } from 'firebase-saga';

export function* getRrs() {
    const rhythmroulettes = yield call(getAll, 'rhythmroulettes');
    
    yield put(rrsLoaded({rhythmroulettes:rhythmroulettes}));
    
    ///*
    yield put(loadRrsForSort());
    const rhythmroulettesCopy = JSON.parse(JSON.stringify(rhythmroulettes))//Object.assign({}, rhythmroulettes);
    console.log(rhythmroulettes);    
    console.log(rhythmroulettesCopy);
    const youtubeurlPre = "https://www.googleapis.com/youtube/v3/videos?id=";
    const youtubeurlPost = "&key=AIzaSyABOvyyjtmu4ioGemSRy4SJcjtBU5DUsqA&part=statistics";
    for(let i=0; i<rhythmroulettesCopy.length; i++){
        //yield call(getYoutube, [i, rhythmroulettes[i].youtubeId]);
        let youtubeData = yield call(request, youtubeurlPre+rhythmroulettesCopy[i].youtubeId+youtubeurlPost);
        //yield put(addYoutube(i, youtubeData));
        console.log(youtubeData);
        rhythmroulettesCopy[i].youtubeData = youtubeData;
    }
    yield put(rrsForSortLoaded({rhythmroulettes:rhythmroulettesCopy}));
    //*/
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

// Bootstrap sagas
export default [
  rrsData    
];
