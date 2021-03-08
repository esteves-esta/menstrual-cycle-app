enum Types {
  SIGN_IN_REQUEST = 'AUTH/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'AUTH/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'AUTH/SIGN_IN_FAILURE',
  GET_TOKEN = 'AUTH/GET_TOKEN',
  SIGN_OUT = 'AUTH/SIGN_OUT',
  CLEAN_SETUP = 'AUTH/CLEAN_SETUP',
  SET_SETUP = 'AUTH/SET_SETUP',
}
export interface AuthState {
  readonly loading: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly token: string | null;
  readonly newSetup: boolean;
}

export default Types;
