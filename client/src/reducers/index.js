import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import displayReducer from './display_reducer';

const rootReducer = combineReducers({
    displayImgs: displayReducer,
    form: formReducer
});

export default rootReducer;