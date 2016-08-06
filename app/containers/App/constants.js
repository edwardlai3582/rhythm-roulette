/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

//export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
//export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
//export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
////
export const LOAD_RRS = 'boilerplate/App/LOAD_RRS';
export const LOAD_RRS_SUCCESS = 'boilerplate/App/LOAD_RRS_SUCCESS';
export const LOAD_RRS_ERROR = 'boilerplate/App/LOAD_RRS_ERROR';

export const LOAD_RRSFORSORT = 'boilerplate/App/LOAD_RRSFORSORT';
export const LOAD_RRSFORSORT_SUCCESS = 'boilerplate/App/LOAD_RRSFORSORT_SUCCESS';
export const LOAD_RRSFORSORT_ERROR = 'boilerplate/App/LOAD_RRSFORSORT_ERROR';

export const LOAD_YOUTUBE =         'boilerplate/App/LOAD_YOUTUBE';
export const LOAD_YOUTUBE_SUCCESS = 'boilerplate/App/LOAD_YOUTUBE_SUCCESS';
export const LOAD_YOUTUBE_ERROR =   'boilerplate/App/LOAD_YOUTUBE_ERROR';

export const LOAD_EP =         'boilerplate/App/LOAD_EP';
export const LOAD_EP_SUCCESS = 'boilerplate/App/LOAD_EP_SUCCESS';
export const LOAD_EP_ERROR =   'boilerplate/App/LOAD_EP_ERROR';

export const LOAD_SHOP =         'boilerplate/App/LOAD_SHOP';
export const LOAD_SHOP_SUCCESS = 'boilerplate/App/LOAD_SHOP_SUCCESS';
export const LOAD_SHOP_ERROR =   'boilerplate/App/LOAD_SHOP_ERROR';

export const CLEAR_SHOP =            'boilerplate/App/CLEAR_SHOP';
export const CLEAR_SHOPIMG =         'boilerplate/App/CLEAR_SHOPIMG';

export const LOAD_SHOPIMG =         'boilerplate/App/LOAD_SHOPIMG';
export const LOAD_SHOPIMG_SUCCESS = 'boilerplate/App/LOAD_SHOPIMG_SUCCESS';
export const LOAD_SHOPIMG_ERROR =   'boilerplate/App/LOAD_SHOPIMG_ERROR';

//records
export const LOAD_RECORD1 =         'boilerplate/App/LOAD_RECORD1';
export const LOAD_RECORD1_SUCCESS = 'boilerplate/App/LOAD_RECORD1_SUCCESS';
export const LOAD_RECORD1_ERROR =   'boilerplate/App/LOAD_RECORD1_ERROR';
export const LOAD_RECORD2 =         'boilerplate/App/LOAD_RECORD2';
export const LOAD_RECORD2_SUCCESS = 'boilerplate/App/LOAD_RECORD2_SUCCESS';
export const LOAD_RECORD2_ERROR =   'boilerplate/App/LOAD_RECORD2_ERROR';
export const LOAD_RECORD3 =         'boilerplate/App/LOAD_RECORD3';
export const LOAD_RECORD3_SUCCESS = 'boilerplate/App/LOAD_RECORD3_SUCCESS';
export const LOAD_RECORD3_ERROR =   'boilerplate/App/LOAD_RECORD3_ERROR';
