// import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import getRealm from 'services/realm';
import Period from 'models/Period';
import { addDays, format } from 'date-fns';
import { getUTCDate } from 'helpers';
import { PeriodMarked } from 'models/PeriodMarked';

export function* getAll() {
  try {
    const realm: Realm = yield getRealm();
    let periods;
    let averagePeriodDuration = 0;
    let averageCycleDuration = 0;
    let nextPeriod: Date | undefined;
    let periodOngoing: Date | undefined;
    const periodsMarked: PeriodMarked = {};

    yield realm.write(() => {
      periods = realm.objects<Period>('Period');

      if (periods.length === 0) {
        periods = undefined;
      } else {
        averageCycleDuration = periods?.reduce(
          (accumulator, item) => accumulator + item.cycleDuration,
          0,
        );
        let cycles = 0;
        periods.forEach((item) => {
          item.cycleDuration > 0 ? cycles++ : null;
        });
        averageCycleDuration /= cycles;

        averagePeriodDuration = periods?.reduce(
          (accumulator, item) => accumulator + item.days,
          0,
        );
        averagePeriodDuration /= periods.length;

        const lastPeriod = periods.sorted('id', true)[0];
        if (lastPeriod.end === null) {
          periodOngoing = lastPeriod.start;
        } else {
          nextPeriod = addDays(lastPeriod.start, averageCycleDuration);
        }

        periods.forEach((item) => {
          if (item.end) {
            for (
              let date = item.start;
              date <= item.end;
              date = addDays(date, 1)
            ) {
              const dateUtc: Date = getUTCDate(date);
              const formatted = format(dateUtc, 'yyyy-MM-dd');

              periodsMarked[formatted] = {
                startingDay:
                  date.getDate() === item.start.getDate() ? true : false,
                endingDay: date.getDate() === item.end.getDate() ? true : false,
                color: '#7B5DD6',
                textColor: '#fff',
              };
            }
          }
        });
      }
    });

    realm.close();
    yield put(
      actions.getPeriodsSuccess({
        averageCycleDuration,
        averagePeriodDuration,
        periods,
        nextPeriod,
        periodsMarked,
        periodOngoing,
      }),
    );
  } catch (error) {
    console.log('REALM DB ERROR');
    console.log(error);
    yield put(actions.getPeriodsError());
  }
}
