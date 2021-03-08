import Types, { AuthState } from './types';
import { AuthAction } from './actions';

export const initialState: AuthState = {
  loading: false,
  isSignedIn: false,
  error: false,
  token: null,
  newSetup: false,
};

export default function auth(
  state = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
