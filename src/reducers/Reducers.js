import * as types from '../actions/ActionTypes';

const initialState = {
    authStatus: false,
  }

export default (state = initialState, action = {}) => {
    switch (action.type) {
      
      //AUTHENTICATION
      case types.SET_AUTH_STATUS:
        return {
            ...state,
            authStatus: action.status
        };

      default:
        return state;
      }
}
