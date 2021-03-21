import Types from '../types';
import { takeLatest, all } from 'redux-saga/effects';

import { getAll } from './getAll';

export default all([takeLatest(Types.GET_PERIODS, getAll)]);
