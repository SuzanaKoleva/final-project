import {combineReducers, createStore } from 'redux';
import userReducer from './Users/reducers/userReducer';
import loginReducer from './Users/reducers/loginReducer';


const rootReducer = combineReducers({
    userReducer,
    loginReducer,
  })
  
const store = createStore(rootReducer);
export default store;
