// import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import getRealm from 'services/realm';

export function* deleteAll() {
  try {
    const realm: Realm = yield getRealm();

    yield realm.write(() => {
      realm.deleteAll();
    });

    realm.close();

    yield put(actions.deleteSuccess());
  } catch (error) {
    const message = error as Error;

    yield put(actions.deleteError(message.message));
  }
}
