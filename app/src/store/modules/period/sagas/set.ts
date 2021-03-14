// import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';

import getRealm from 'services/realm';
import PeriodSchema from 'schemas/PeriodSchema';

// export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
export function* setAll() {
  try {
    // const realm: Realm = yield getRealm();

    // const period = {
    //   id: 2,
    //   start: new Date(),
    // };

    // realm.write(() => {
    //   const tasks = realm.objects('Period');

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
    // realm.create('Period', period);
    // realm.deleteAll();
    // });
    // realm.objects('Period').max('id');
    // Sort tasks by name in descending order
    // const tasksWithNoEnd = tasks.filtered("ALL period.days === 0");
    //const lowProgressTasks = tasks.filtered("1 <= progressMinutes && progressMinutes < 10");

    // realm.close();

    yield put(actions.getPeriodsSuccess([]));
  } catch (error) {
    console.log('REALM DB ERROR');
    console.log(error);
    yield put(actions.getPeriodsError());
  }
}
