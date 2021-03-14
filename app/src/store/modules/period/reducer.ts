import Types, { PeriodState } from './types';
import { PeriodAction } from './actions';

export const initialState: PeriodState = {
  loading: true,
  error: false,
  period: undefined,
};

export default function auth(
  state = initialState,
  action: PeriodAction,
): PeriodState {
  switch (action.type) {
    case Types.GET_PERIODS:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case Types.GET_PERIODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.GET_PERIODS_SUCCESS:
      return {
        period: action.payload.periods,
        error: false,
        loading: false,
      };
    case Types.SET_OLD_PERIODS:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case Types.SET_OLD_PERIODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.SET_OLD_PERIODS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case Types.SET_BEGIN:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case Types.SET_BEGIN_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.SET_BEGIN_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case Types.SET_END:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case Types.SET_END_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.SET_END_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };
    case Types.SET_DAY_SYMPTOMS:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case Types.SET_DAY_SYMPTOMS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case Types.SET_DAY_SYMPTOMS_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
