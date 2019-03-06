import {combineReducers, createStore } from 'redux';
import userReducer from './Users/reducers/userReducer';
import loginReducer from './Users/reducers/loginReducer';
import dashboardReducer from './DashboardPage/reducer';
import categoryReducer from './CategoryPage/reducer';
import categoriesListReducer from './ChooseFavCat/reducer';


const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  dashboardReducer,
  categoryReducer,
  categoriesListReducer
});
  
const store = createStore(rootReducer);
export default store;