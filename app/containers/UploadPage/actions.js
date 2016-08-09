
import {

  LOAD_EP,
  LOAD_EP_SUCCESS,
  LOAD_EP_ERROR,     
} from './constants';

export function UploadEp() {
  return {
    type: LOAD_EP,
  };
}

