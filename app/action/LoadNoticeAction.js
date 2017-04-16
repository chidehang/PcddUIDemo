import {ToastAndroid} from 'react-native';
import * as types from '../ActionType';

export function loadNoticeList() {
    return dispatch=> {
        dispatch(loadingNotice());
        fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(loadedNotice(responseJson.movies));
            })
            .catch((error)=> {
                ToastAndroid.show('加载失败:'+error, ToastAndroid.SHORT);
                dispatch(errorNotice(error));
            });
    }
}

function loadingNotice() {
    return {
        type: types.ACTION_NOTICE_LOADING,
    }
}
function loadedNotice(result) {
    return {
        type: types.ACTION_NOTICE_LOADED,
        data: result,
    }
}
function errorNotice(error) {
    return {
        type: types.ACTION_NOTICE_ERROR,
        data: error,
    }
}