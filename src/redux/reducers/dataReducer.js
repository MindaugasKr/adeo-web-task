import {
  RECEIVE_DATA,
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return [ ...action.payload ];
    default: return state;
  }
}