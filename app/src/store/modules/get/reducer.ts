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
        success: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
