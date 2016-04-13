import { combineReducers } from 'redux';
import authenticationReducer from './authenticatoin';

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
