import * as types from '../../constants/actionTypes';
import { getSchedulesApi } from './api';

export function getSchedules() {
  return (dispatch, getState) => {
  	getSchedulesApi().then((res) => {
  		dispatch({
  			type: types.GET_SCHEDULES,
    		data: res
  		});
  	});
  };
}