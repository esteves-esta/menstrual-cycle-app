import { combineReducers } from 'redux';
import { StoreState } from '../createStore';
import period from './period/reducer';

export default combineReducers<StoreState>({
  period,
});
