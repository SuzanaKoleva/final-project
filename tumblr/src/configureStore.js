import {combineReducers, createStore } from 'redux';


import appReducer from './App/reducer';
import userReducer from './Users/reducers/userReducer';
import dashboardReducer from './DashboardPage/reducer';
import categoryReducer from './CategoryPage/reducer';
import primaryDashboardActionsReducer from './PrimaryDashboardActions/reducer';
import categoriesListReducer from './ChooseFavCat/reducer';
import authHeaderReducer from './AuthHeader/reducer';

import postAreaTextReducer from './PostAreaText/reducer';
import postPhotoReducer from './PostPhoto/reducer'

const rootReducer = combineReducers({
  appReducer,
  userReducer,
  dashboardReducer,
  categoryReducer,
  primaryDashboardActionsReducer,
  categoriesListReducer,
  postAreaTextReducer,
  authHeaderReducer,
  postPhotoReducer
});
  
const store = createStore(rootReducer);
export default store;
