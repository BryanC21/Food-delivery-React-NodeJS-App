import { combineReducers } from 'redux';
import customerReducer from './customerReducer';
import searchReducer from './searchReducer'

export default combineReducers({
    customerReducer,
    searchReducer,
});