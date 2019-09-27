import * as types from '../../constants/actionTypes';
import { getLatestNewsApi, getHottestNewsApi } from './api';

export function getLatestNews() {
  return (dispatch, getState) => {
  	getLatestNewsApi().then((res) => {
  		dispatch({
  			type: types.GET_LATEST_NEWS,
    		data: res
  		});
  	});
  };
}

export function getHottestNews() {
	console.log('before getHottestNewsApi')
  return (dispatch, getState) => {
  	console.log('getHottestNewsApi')
  	getHottestNewsApi().then((res) => {
  		console.log('getHottestNewsApi:::', res);
  		dispatch({
  			type: types.GET_HOTTEST_NEWS,
    		data: res
  		});
  	});
  };
}