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
      id: 1,
      start: last.start,
      end: last.end,
      days: differenceInCalendarDays(last.end, last.start),
      cycleDuration: differenceInCalendarDays(
        last.start,
        secondlastPeriod.start,
      ),
    };

    const periodSecondLast = {
      id: 2,
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

    realm.write(() => {
      realm.create('Period', periodLast);
      realm.create('Period', periodSecondLast);
    });

    realm.close();

    yield put(actions.setOldPeriodsSuccess());
  } catch (error) {
    console.log('REALM DB ERROR');
    console.log(error);
    yield put(actions.setOldPeriodsError());
  }
}

/* 
    const realm: Realm = yield getRealm();

    const period = {
      id: 2,
      start: new Date(),
    };

    realm.write(() => {
      // const tasks = realm.objects('Period');

    // tasks.days = 5;
    // tasks.end = new Date();
    // console.log('=>>');
    // console.log(tasks);
    // console.log('---------------');
    // const lastPeriod = tasks.sorted('days', true)[0];
    // const tasksWithNoEnd = tasks.filtered('end == null');
    // console.log(tasksWithNoEnd);
    // date.fns.duration(lastPeriod.start, period.start)
    // lastPeriod.cycleDuration = 45;
    realm.create('Period', period);
    // realm.deleteAll();
    });
    // realm.objects('Period').max('id');
    // Sort tasks by name in descending order
    // const tasksWithNoEnd = tasks.filtered("ALL period.days === 0");
    //const lowProgressTasks = tasks.filtered("1 <= progressMinutes && progressMinutes < 10");

    // realm.close();
 */
