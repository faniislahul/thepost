import * as types from './ActionTypes';


export function setPostList(posts) {
    return {
        type: types.SET_POST_LIST,
        posts
    };
}

export function setDarkMode(mode) {
    return {
        type: types.SET_DARK_MODE,
        mode
    };
}