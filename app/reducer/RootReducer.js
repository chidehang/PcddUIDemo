import {combineReducers} from 'redux';
import loadNotice from '../reducer/NoticeReducer';

const rootReducer = combineReducers({
    loadNotice
});
export default rootReducer;