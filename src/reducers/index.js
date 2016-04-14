import { combineReducers } from 'redux';
import authenticationReducer from './authenticatoin';
import userReducer from './users';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  users: userReducer
});

export default rootReducer;
