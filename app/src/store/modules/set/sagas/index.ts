import Types from '../types';
import { takeLatest, all } from 'redux-saga/effects';

import { setOldPeriod } from './setOld';

export default all([takeLatest(Types.SET_OLD_PERIODS, setOldPeriod)]);
