import {combineReducers, createStore } from 'redux';
import userReducer from './Users/reducers/userReducer';
import loginReducer from './Users/reducers/loginReducer';
import dashboardReducer from './DashboardPage/reducer';


const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  dashboardReducer
});
  
const store = createStore(rootReducer);
export default store;
