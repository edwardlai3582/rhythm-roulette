/*
 * HomeReducer
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
  LOAD_EP_SUCCESS,
  LOAD_EP,
  LOAD_EP_ERROR,    
} from './constants';
import { fromJS } from 'immutable';


const initialState = fromJS({ });

function epReducer(state = initialState, action) {
    switch (action.type) {
    /*        
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
    */
    default:
      return state;
    }
}

export default epReducer;
