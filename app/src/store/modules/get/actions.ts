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
  nextPeriod: Date;
  periodsMarked: PeriodMarked;
}) {
  return action(Types.GET_PERIODS_SUCCESS, props);
}

export function getPeriodsError() {
  return action(Types.GET_PERIODS_ERROR);
}

export type PeriodAction = ActionType<
  typeof getPeriods | typeof getPeriodsSuccess | typeof getPeriodsError
>;
