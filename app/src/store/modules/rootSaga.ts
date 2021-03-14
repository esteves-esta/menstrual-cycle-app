import { all } from 'redux-saga/effects';
import period from './period/sagas/index';

export default function* rootSaga() {
  return yield all([period]);
}
