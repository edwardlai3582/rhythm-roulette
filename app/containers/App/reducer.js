/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
    
  LOAD_RRS_SUCCESS,
  LOAD_RRS,
  LOAD_RRS_ERROR,    
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: fromJS({
    repositories: false,
  }),
///////////////////////////
  rrData: fromJS({
    rhythmroulettes: false,    
  })    
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
/////////////////////////////////////////////////////////////// 
    case LOAD_RRS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['rrData', 'rhythmroulettes'], false);
    case LOAD_RRS_SUCCESS:
          console.log("success: "+action.rrs);
      return state
        .setIn(['rrData', 'rhythmroulettes'], action.rrs)
        .set('loading', false);
    case LOAD_RRS_ERROR:
          console.log("error: "+action.error);
      return state
        .set('error', action.error)
        .set('loading', false);
///////////////////////////////////////////////////////////////           
    default:
      return state;
  }
}

export default appReducer;
