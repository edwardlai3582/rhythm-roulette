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
    CHANGE_EP,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
    ep: {},
});

function epReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_EP:
            // console.log("user name change to: "+action.name);
            // Delete prefixed '@' from the github username
            return state;
                    //.set('username', action.name.replace(/@/gi, ''));
        default:
            return state;
    }
}

export default epReducer;
