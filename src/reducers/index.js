import { combineReducers } from 'redux';
import DashboardReducer from './dashboard_reducer'
const rootReducer = combineReducers({
  dashboard: DashboardReducer
});

export default rootReducer;
