import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import { differenceInCalendarDays } from 'date-fns';
import getRealm from 'services/realm';

export function* setOldPeriod({
  payload,
}: ActionType<typeof actions.setOldPeriods>) {
  try {
    const { periods } = payload;
    const realm: Realm = yield getRealm();
    const { last, secondlastPeriod } = periods;

    const periodLast = {
      id: 2,
      start: last.start,
      end: last.end,
      days: differenceInCalendarDays(last.end, last.start),
      cycleDuration: differenceInCalendarDays(
        last.start,
        secondlastPeriod.start,
      ),
    };

    const periodSecondLast = {
      id: 1,
      start: secondlastPeriod.start,
      end: secondlastPeriod.end,
      days: differenceInCalendarDays(
        secondlastPeriod.end,
        secondlastPeriod.start,
      ),
      cycleDuration: differenceInCalendarDays(
        last.start,
        secondlastPeriod.start,
      ),
    };

    yield realm.write(() => {
      realm.create('Period', periodLast);
      realm.create('Period', periodSecondLast);
    });

    realm.close();
    yield put(actions.setOldPeriodsSuccess());
  } catch (error) {
    const message = error as Error;
    yield put(actions.setOldPeriodsError(message.message));
  }
}
