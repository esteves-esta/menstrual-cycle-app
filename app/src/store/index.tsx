import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createStore, { StoreAction, StoreState } from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { Dispatch } from 'react';
import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
  TypedUseSelectorHook,
} from 'react-redux';

export const useDispatch = () => _useDispatch<Dispatch<StoreAction>>();

export const useSelector: TypedUseSelectorHook<StoreState> = _useSelector;

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
