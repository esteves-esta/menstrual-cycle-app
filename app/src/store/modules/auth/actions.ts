import { ActionType, action } from 'typesafe-actions';
// import AuthInfo from 'models/AuthInfo';
import Types from './types';

// export function signInRequest(info: AuthInfo) {
//   return action(Types.SIGN_IN_REQUEST, { info });
// }

export function signInRequest() {
  return action(Types.SIGN_IN_REQUEST);
}

export type AuthAction = ActionType<typeof signInRequest>;
