import Types, { SetState } from './types';
import { SetAction } from './actions';

export const initialState: SetState = {
  loading: false,
  error: undefined,
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
        error: undefined,
        loading: true,
        success: false,
      };
    case Types.SET_OLD_PERIODS_ERROR:
      console.log('erro');
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    case Types.SET_OLD_PERIODS_SUCCESS:
      console.log('sucesso');
      return {
        ...state,
        error: undefined,
        loading: false,
        success: true,
      };
    case Types.SET_BEGIN:
      return {
        ...state,
        error: undefined,
        loading: true,
        success: false,
      };
    case Types.SET_BEGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    case Types.SET_BEGIN_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: false,
        success: true,
      };
    case Types.SET_END:
      return {
        ...state,
        error: undefined,
        loading: true,
        success: false,
      };
    case Types.SET_END_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    case Types.SET_END_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: false,
        success: true,
      };
    case Types.SET_DAY_DISCONFORT:
      return {
        ...state,
        error: undefined,
        loading: true,
        success: false,
      };
    case Types.SET_DAY_DISCONFORT_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    case Types.SET_DAY_DISCONFORT_SUCCESS:
      return {
        ...state,
        error: undefined,
        loading: false,
        success: true,
      };
    case Types.CLEAR:
      return {
        ...state,
        error: undefined,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
