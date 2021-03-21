import { ActionType, action } from 'typesafe-actions';
import Types from './types';
import Period from 'models/Period';
import { PeriodMarked } from 'models/PeriodMarked';

export function getPeriods() {
  return action(Types.GET_PERIODS);
}

export function getPeriodsSuccess(props: {
  periods: Period[] | undefined;
  averagePeriodDuration: number;
  averageCycleDuration: number;
  nextPeriod: Date | undefined;
  periodsMarked: PeriodMarked;
  periodOngoing: Date | undefined;
}) {
  return action(Types.GET_PERIODS_SUCCESS, props);
}

export function getPeriodsError() {
  return action(Types.GET_PERIODS_ERROR);
}
export function deleteError() {
  return action(Types.DELETE_ALL_ERROR);
}
export function deleteAll() {
  return action(Types.DELETE_ALL);
}
export function deleteSuccess() {
  return action(Types.DELETE_ALL_SUCCESS);
}

export type PeriodAction = ActionType<
  | typeof getPeriods
  | typeof getPeriodsSuccess
  | typeof getPeriodsError
  | typeof deleteAll
  | typeof deleteSuccess
  | typeof deleteError
>;
