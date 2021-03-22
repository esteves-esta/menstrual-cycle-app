import Types from '../types';
import { takeLatest, all } from 'redux-saga/effects';

import { setOldPeriod } from './setOld';
import { setBegin } from './setBegin';
import { setEnd } from './setEnd';
import { setDisconfort } from './setDisconfort';

export default all([
  takeLatest(Types.SET_OLD_PERIODS, setOldPeriod),
  takeLatest(Types.SET_BEGIN, setBegin),
  takeLatest(Types.SET_END, setEnd),
  takeLatest(Types.SET_DAY_DISCONFORT, setDisconfort),
]);
