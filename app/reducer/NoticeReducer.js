import * as types from '../ActionType';

const initialState = {
    loading: 1,
    data: [],
}

export default function loadNotice(state=initialState, action) {
    switch(action.type) {
        case types.ACTION_NOTICE_LOADING:
            return Object.assign({}, state, {
                loading: 1,
            });
        case types.ACTION_NOTICE_LOADED:
            return Object.assign({}, state, {
                loading: 2,
                data: action.data,
            });
        case types.ACTION_NOTICE_ERROR:
            return Object.assign({}, state, {
                loading: 3,
                data: action.data,
            })
        default:
            return state;
    }
}