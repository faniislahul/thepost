import * as types from './ActionTypes';


export function setAuthStatus(status) {
    return {
        type: types.SET_AUTH_STATUS,
        status
    };
}