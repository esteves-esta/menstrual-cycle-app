import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import { differenceInCalendarDays } from 'date-fns';
import getRealm from 'services/realm';
import Period from 'models/Period';

export function* setBegin({
  payload,
}: ActionType<typeof actions.setPeriodBegin>) {
  try {
    const { start } = payload;
    const realm: Realm = yield getRealm();

    const period = {
      id: 0,
      start: start,
      cycleDuration: 0,
    };

    yield realm.write(() => {
      const periods = realm.objects<Period>('Period');
      const lastPeriod = periods.sorted('id', true)[0];
      lastPeriod.cycleDuration = differenceInCalendarDays(
        start,
        lastPeriod.start,
      );

      period.id = lastPeriod.id + 1;
      realm.create('Period', period);
    });
    realm.close();

    yield put(actions.setPeriodBeginSuccess());
  } catch (error) {
    console.log('REALM DB ERROR');
    console.log(error);
    yield put(actions.setPeriodBeginError());
  }
}
