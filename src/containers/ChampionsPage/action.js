import * as types from '../../constants/actionTypes';
import { getChampionsApi } from './api';

export function getChampions() {
  return (dispatch, getState) => {
  	getChampionsApi().then((res) => {
  		dispatch({
  			type: types.GET_CHAMPIONS,
    		data: res
  		});
  	});
  };
}