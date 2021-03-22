import Types, { PeriodState } from './types';
import { PeriodAction } from './actions';

export const initialState: PeriodState = {
  loading: true,
  error: undefined,
  success: false,
  period: undefined,
  averageCycleDuration: 0,
  averagePeriodDuration: 0,
  nextPeriod: undefined,
  periodsMarked: {},
  periodOngoing: undefined,
};

export default function auth(
  state = initialState,
  action: PeriodAction,
): PeriodState {
  switch (action.type) {
    case Types.GET_PERIODS:
      return {
        ...state,
        error: undefined,
        loading: true,
        success: false,
      };
    case Types.GET_PERIODS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        success: false,
      };
    case Types.GET_PERIODS_SUCCESS:
      return {
        ...state,
        period: action.payload.periods,
        error: undefined,
        loading: false,
        success: false,
        ...action.payload,
      };
    case Types.DELETE_ALL_ERROR:
      return { ...state, loading: false, error: action.payload.error };

    case Types.DELETE_ALL_SUCCESS:
      return { ...initialState, loading: false, success: true };

    case Types.DELETE_ALL:
      return { ...state, loading: true };

    case Types.CLEAR:
      return { ...state, error: undefined, success: false, loading: false };
    default:
      return state;
  }
}
