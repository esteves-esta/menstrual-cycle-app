import { all } from 'redux-saga/effects';
import period from './get/sagas/index';
import setPeriod from './set/sagas/index';

export default function* rootSaga() {
  return yield all([period, setPeriod]);
}
