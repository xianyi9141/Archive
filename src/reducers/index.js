import { combineReducers } from 'redux';
import home from '../containers/HomePage/reducer';
import champions from '../containers/ChampionsPage/reducer';
import schedules from '../containers/SchedulePage/reducer';

const rootReducer = combineReducers({
  home,
  champions,
  schedules
});

export default rootReducer;
