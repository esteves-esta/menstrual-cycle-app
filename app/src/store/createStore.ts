import { applyMiddleware, createStore, Reducer, Middleware } from 'redux';
import { PeriodState } from './modules/period/types';
import { PeriodAction } from './modules/period/actions';

export interface StoreState {
  period: PeriodState;
}

export type StoreAction = PeriodAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
