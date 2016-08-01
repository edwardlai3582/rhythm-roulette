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
  LOAD_RRS_SUCCESS,
  LOAD_RRS,
  LOAD_RRS_ERROR,
/////////////////////
  LOAD_EP_SUCCESS,
  LOAD_EP,
  LOAD_EP_ERROR,    
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  //userData: fromJS({
//    repositories: false,
  //}),
///////////////////////////
  rrData: fromJS({
    rhythmroulettes: false,    
  }),
///////////////////////////
    eploading: false,
    eperror: false,    
  epData: fromJS({
    ep: false,    
  }),    
});

function appReducer(state = initialState, action) {
  switch (action.type) {
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
/////////////////////////////////////////////////////////////
    case LOAD_EP:
      return state
        .set('eploading', true)
        .set('eperror', false)
        .setIn(['epData', 'ep'], false);
    case LOAD_EP_SUCCESS:
          console.log("ep success: "+action.ep);
      return state
        .setIn(['epData', 'ep'], action.ep)
        .set('eploading', false);
    case LOAD_EP_ERROR:
          console.log("ep error: "+action.eperror);
      return state
        .set('eperror', action.eperror)
        .set('eploading', false);   
///////////////////////////////////////////////////////////////          
    default:
      return state;
  }
}

export default appReducer;
