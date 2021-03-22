import { ActionType } from 'typesafe-actions';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import getRealm from 'services/realm';
import Period, { Disconfort } from 'models/Period';

export function* setDisconfort({
  payload,
}: ActionType<typeof actions.setDayDisconfort>) {
  try {
    const { date, symptoms } = payload;
    const realm: Realm = yield getRealm();

    yield realm.write(() => {
      const periods = realm.objects<Period>('Period');
      const lastPeriod = periods.sorted('id', true)[0];
      const disconfort = lastPeriod.toJSON();

      const disconforts = realm.objects<Disconfort>('Disconfort');
      const lastDisconfort = disconforts.sorted('id', true)[0];

      let index = 0;
      index = lastDisconfort.id + 1;

      lastPeriod.daysDisconforts = [
        ...disconfort.daysDisconforts,
        {
          id: index,
          date: date,
          symptoms: symptoms,
        },
      ];
    });
    realm.close();

    yield put(actions.setDayDisconfortSuccess());
  } catch (error) {
    console.log('REALM DB ERROR');
    console.log(error);
    yield put(actions.setDayDisconfortError());
  }
}
