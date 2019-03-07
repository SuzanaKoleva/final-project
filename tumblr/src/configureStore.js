import {combineReducers, createStore } from 'redux';
import userReducer from './Users/reducers/userReducer';
import dashboardReducer from './DashboardPage/reducer';
import categoryReducer from './CategoryPage/reducer';
import primaryDashboardActionsReducer from './PrimaryDashboardActions/reducer';
import categoriesListReducer from './ChooseFavCat/reducer';


const rootReducer = combineReducers({
  userReducer,
  dashboardReducer,
  categoryReducer,
  primaryDashboardActionsReducer,
  categoriesListReducer
});
  
const store = createStore(rootReducer);
export default store;
