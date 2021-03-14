import Types from '../types';
import { takeLatest, all } from 'redux-saga/effects';

import { getAll } from './getAll';
import { setOldPeriod } from './setOld';

export default all([
  takeLatest(Types.GET_PERIODS, getAll),
  takeLatest(Types.SET_OLD_PERIODS, setOldPeriod),
]);
