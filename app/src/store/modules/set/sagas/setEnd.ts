import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import { differenceInCalendarDays } from 'date-fns';
import getRealm from 'services/realm';
import Period from 'models/Period';

export function* setEnd({ payload }: ActionType<typeof actions.setPeriodEnd>) {
  try {
    const { end } = payload;
    const realm: Realm = yield getRealm();

    yield realm.write(() => {
      const periods = realm.objects<Period>('Period');
      const lastPeriod = periods.sorted('id', true)[0];
      lastPeriod.end = end;
      lastPeriod.days = differenceInCalendarDays(end, lastPeriod.start);
    });

    realm.close();

    yield put(actions.setPeriodEndSuccess());
  } catch (error) {
    const message = error as Error;
    yield put(actions.setPeriodEndError(message.message));
  }
}
