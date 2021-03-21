import Types from '../types';
import { takeLatest, all } from 'redux-saga/effects';

import { getAll } from './getAll';
import { deleteAll } from './deleteAll';

export default all([
  takeLatest(Types.GET_PERIODS, getAll),
  takeLatest(Types.DELETE_ALL, deleteAll),
]);
