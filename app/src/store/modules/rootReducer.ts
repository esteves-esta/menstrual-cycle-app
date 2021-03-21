import { combineReducers } from 'redux';
import { StoreState } from '../createStore';
import period from './get/reducer';
import setPeriod from './set/reducer';

export default combineReducers<StoreState>({
  period,
  setPeriod,
});
