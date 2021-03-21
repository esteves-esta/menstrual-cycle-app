import Types, { PeriodState } from './types';
import { PeriodAction } from './actions';

export const initialState: PeriodState = {
  loading: true,
  error: false,
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
        error: false,
        loading: true,
        success: false,
      };
    case Types.GET_PERIODS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        success: false,
      };
    case Types.GET_PERIODS_SUCCESS:
      return {
        ...state,
        period: action.payload.periods,
        error: false,
        loading: false,
        success: false,
        ...action.payload,
      };
    case Types.DELETE_ALL_ERROR:
      return { ...state, loading: false, error: true };

    case Types.DELETE_ALL_SUCCESS:
      return { ...initialState, loading: false, success: true };

    case Types.DELETE_ALL:
      return { ...state, loading: true };
    default:
      return state;
  }
}
