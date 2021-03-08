import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import Types from './types';

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { info } = payload;
    // const { data } = yield call(Api.post, '', { email, password });

    // yield put(actions.signInSuccess({ token: info.user }));
    
  } catch (error) {
    console.log(error);
    // yield put(actions.signInFailure());
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, signIn)]);
