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
/////////////////////
  LOAD_SHOP_SUCCESS,
  LOAD_SHOP,
  LOAD_SHOP_ERROR,  
/////////////////////
  LOAD_SHOPIMG_SUCCESS,
  LOAD_SHOPIMG,
  LOAD_SHOPIMG_ERROR,
/////////////////////
  LOAD_RECORD1_SUCCESS,
  LOAD_RECORD1,
  LOAD_RECORD1_ERROR, 
  LOAD_RECORD2_SUCCESS,
  LOAD_RECORD2,
  LOAD_RECORD2_ERROR, 
  LOAD_RECORD3_SUCCESS,
  LOAD_RECORD3,
  LOAD_RECORD3_ERROR,     
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
///////////////////////////
    shoploading: false,
    shoperror: false,    
    shopData: fromJS({
        shop: false,    
    }), 
///////////////////////////
    shopimgloading: false,
    shopimgerror: false,    
    shopimgData: fromJS({
        shopimg: false,    
    }), 
///////////////////////////
    record1loading: false,
    record1error: false,    
    record1Data: fromJS({
        record1: false,    
    }),  
    record2loading: false,
    record2error: false,    
    record2Data: fromJS({
        record2: false,    
    }),  
    record3loading: false,
    record3error: false,    
    record3Data: fromJS({
        record3: false,    
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
          //console.log("success: "+action.rrs);
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
          //console.log("ep success: "+action.ep);
      return state
        .setIn(['epData', 'ep'], action.ep)
        .set('eploading', false);
    case LOAD_EP_ERROR:
          console.log("ep error: "+action.eperror);
      return state
        .set('eperror', action.eperror)
        .set('eploading', false);   
/////////////////////////////////////////////////////////////
    case LOAD_SHOP:
      return state
        .set('shoploading', true)
        .set('shoperror', false)
        .setIn(['shopData', 'shop'], false);
    case LOAD_SHOP_SUCCESS:
          console.log("shop success: ");
          console.log(action.shop);
      return state
        .setIn(['shopData', 'shop'], action.shop)
        .set('shoploading', false);
    case LOAD_SHOP_ERROR:
          console.log("shop error: "+action.shoperror);
      return state
        .set('shoperror', action.shoperror)
        .set('shoploading', false);  
/////////////////////////////////////////////////////////////
    case LOAD_SHOPIMG:
      return state
        .set('shopimgloading', true)
        .set('shopimgerror', false)
        .setIn(['shopimgData', 'shopimg'], false);
    case LOAD_SHOPIMG_SUCCESS:
          console.log("shop img success: ");
          console.log(action.shopimg);
      return state
        .setIn(['shopimgData', 'shopimg'], action.shopimg)
        .set('shopimgloading', false);
    case LOAD_SHOPIMG_ERROR:
          console.log("shop img error: "+action.shopimgerror);
      return state
        .set('shopimgerror', action.shopimgerror)
        .set('shopimgloading', false);            
/////////////////////////////////////////////////////////////// 
    case LOAD_RECORD1:
      return state
        .set('record1loading', true)
        .set('record1error', false)
        .setIn(['record1Data', 'record1'], false);
    case LOAD_RECORD1_SUCCESS:
          console.log("record1 success: ");
          console.log(action.record1);
      return state
        .setIn(['record1Data', 'record1'], action.record1)
        .set('record1loading', false);
    case LOAD_RECORD1_ERROR:
          console.log("record1 error: "+action.record1error);
      return state
        .set('record1error', action.record1error)
        .set('record1loading', false);            
///////////////////////////////////////////////////////////////  
    case LOAD_RECORD2:
      return state
        .set('record2loading', true)
        .set('record2error', false)
        .setIn(['record2Data', 'record2'], false);
    case LOAD_RECORD2_SUCCESS:
          console.log("record2 success: ");
          console.log(action.record2);
      return state
        .setIn(['record2Data', 'record2'], action.record2)
        .set('record2loading', false);
    case LOAD_RECORD2_ERROR:
          console.log("record2 error: "+action.record2error);
      return state
        .set('record2error', action.record2error)
        .set('record2loading', false);            
/////////////////////////////////////////////////////////////// 
    case LOAD_RECORD3:
      return state
        .set('record3loading', true)
        .set('record3error', false)
        .setIn(['record3Data', 'record3'], false);
    case LOAD_RECORD3_SUCCESS:
          console.log("record3 success: ");
          console.log(action.record3);
      return state
        .setIn(['record3Data', 'record3'], action.record3)
        .set('record3loading', false);
    case LOAD_RECORD3_ERROR:
          console.log("record3 error: "+action.record3error);
      return state
        .set('record3error', action.record3error)
        .set('record3loading', false);            
///////////////////////////////////////////////////////////////            
    default:
      return state;
  }
}

export default appReducer;
