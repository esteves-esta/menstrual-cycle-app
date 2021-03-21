import Types, { SetState } from './types';
import { SetAction } from './actions';

export const initialState: SetState = {
  loading: false,
  error: false,
  success: false,
};

export default function auth(
  state = initialState,
  action: SetAction,
): SetState {
  switch (action.type) {
    case Types.SET_OLD_PERIODS:
      return {
        ...state,
        error: false,
        loading: true,
        success: false,
      };
    case Types.SET_OLD_PERIODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.SET_OLD_PERIODS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: true,
      };
    case Types.SET_BEGIN:
      return {
        ...state,
        error: false,
        loading: true,
        success: false,
      };
    case Types.SET_BEGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.SET_BEGIN_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: true,
      };
    case Types.SET_END:
      return {
        ...state,
        error: false,
        loading: true,
        success: false,
      };
    case Types.SET_END_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.SET_END_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: true,
      };
    case Types.SET_DAY_SYMPTOMS:
      return {
        ...state,
        error: false,
        loading: true,
        success: false,
      };
    case Types.SET_DAY_SYMPTOMS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.SET_DAY_SYMPTOMS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        success: true,
      };
    case Types.CLEAR:
      return {
        ...state,
        error: false,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
