import {combineReducers, createStore } from 'redux';
import userReducer from './Users/reducers/userReducer';
import loginReducer from './Users/reducers/loginReducer';
import dashboardReducer from './DashboardPage/reducer';
import categoryReducer from './CategoryPage/reducer';
import primaryDashboardActionsReducer from './PrimaryDashboardActions/reducer';
import categoriesListReducer from './ChooseFavCat/reducer';


const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  dashboardReducer,
  categoryReducer,
  primaryDashboardActionsReducer,
  categoriesListReducer
});
  
const store = createStore(rootReducer);
export default store;
