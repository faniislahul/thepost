import * as types from '../actions/ActionTypes';

const initialState = {
    posts: null,
    darkMode: false,
  }

export default (state = initialState, action = {}) => {
    switch (action.type) {
      
      case types.SET_POST_LIST:
        return {
            ...state,
            posts: action.posts
        };

      case types.SET_DARK_MODE:
        return {
            ...state,
            darkMode: action.mode
        };

      default:
        return state;
      }
}
