import * as types from '../../constants/actionTypes';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'champions',
  storage,
  whitelist: [/* keys to be persisted */]
};

const initialState = {};

/**
 * containers/home/reducer.js : home reducer
 * @param {Object} state the state of the home container
 * @param {Object} action the redux action instance
 * @returns {Object} returns the new state
 **/
function champions(state = initialState, action) {
  switch (action.type) {
    case types.GET_CHAMPIONS:
      return {
        ...state,
        champions: action.data,
        loading: true
      };

    default:
      return state;
  }
}

export default persistReducer(persistConfig, champions);