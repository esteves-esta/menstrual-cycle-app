import Period from 'models/Period';
import { PeriodMarked } from 'models/PeriodMarked';

enum Types {
  GET_PERIODS = 'PERIOD/GET_PERIODS',
  GET_PERIODS_ERROR = 'PERIOD/GET_PERIODS_ERROR',
  GET_PERIODS_SUCCESS = 'PERIOD/GET_PERIODS_SUCCESS',
  DELETE_ALL_SUCCESS = 'PERIOD/DELETE_ALL_SUCCESS',
  DELETE_ALL = 'PERIOD/DELETE_ALL',
  DELETE_ALL_ERROR = 'PERIOD/DELETE_ALL_ERROR',
}

export interface PeriodState {
  readonly loading: boolean;
  readonly period: Period[] | undefined;
  readonly error: boolean;
  readonly success: boolean;
  readonly periodOngoing: Date | undefined;
  readonly averagePeriodDuration: number;
  readonly averageCycleDuration: number;
  readonly nextPeriod: Date | undefined;
  readonly periodsMarked: PeriodMarked;
}

export default Types;
