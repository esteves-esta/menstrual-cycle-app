import Period from 'models/Period';
import { PeriodMarked } from 'models/PeriodMarked';

enum Types {
  GET_PERIODS = 'PERIOD/GET_PERIODS',
  GET_PERIODS_ERROR = 'PERIOD/GET_PERIODS_ERROR',
  GET_PERIODS_SUCCESS = 'PERIOD/GET_PERIODS_SUCCESS',
}

export interface PeriodState {
  readonly loading: boolean;
  readonly period: Period[] | undefined;
  readonly error: boolean;
  readonly success: boolean;
  readonly averagePeriodDuration: number;
  readonly averageCycleDuration: number;
  readonly nextPeriod: Date | undefined;
  readonly periodsMarked: PeriodMarked;
}

export default Types;
