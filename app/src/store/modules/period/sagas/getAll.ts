// import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import getRealm from 'services/realm';

export function* getAll() {
  try {
    const realm: Realm = yield getRealm();
    let tasks;
    realm.write(() => {
      tasks = realm.objects('Period');

      if (tasks.length === 0) {
        tasks = undefined;
      }
      // realm.deleteAll();
    });
    realm.close();
    yield put(actions.getPeriodsSuccess(tasks));
  } catch (error) {
    console.log('REALM DB ERROR');
    console.log(error);
    yield put(actions.getPeriodsError());
  }
}
