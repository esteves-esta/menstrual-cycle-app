import { combineReducers } from 'redux';
import { StoreState } from '../createStore';
import period from './get/reducer';

export default combineReducers<StoreState>({
  period,
});
