import { applyMiddleware, createStore, Reducer, Middleware } from 'redux';
import { PeriodState } from './modules/get/types';
import { PeriodAction } from './modules/get/actions';

import { SetState } from './modules/set/types';
import { SetAction } from './modules/set/actions';

export interface StoreState {
  period: PeriodState;
  setPeriod: SetState;
}

export type StoreAction = PeriodAction | SetAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
