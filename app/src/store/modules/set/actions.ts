import { ActionType, action } from 'typesafe-actions';
import Types from './types';
import FormValues from 'models/OldPeriods';

export function setOldPeriods(periods: FormValues) {
  return action(Types.SET_OLD_PERIODS, { periods });
}

export function setOldPeriodsSuccess() {
  return action(Types.SET_OLD_PERIODS_SUCCESS);
}

export function setOldPeriodsError() {
  return action(Types.SET_OLD_PERIODS_ERROR);
}

export function setPeriodBegin(start: Date) {
  return action(Types.SET_BEGIN, { start });
}
export function setPeriodBeginSuccess() {
  return action(Types.SET_BEGIN_SUCCESS);
}

export function setPeriodBeginError() {
  return action(Types.SET_BEGIN_ERROR);
}
export function setPeriodEnd(end: Date) {
  return action(Types.SET_END, { end });
}
export function setPeriodEndSuccess() {
  return action(Types.SET_END_SUCCESS);
}

export function setPeriodEndError() {
  return action(Types.SET_END_ERROR);
}

export function setDaySymptoms() {
  return action(Types.SET_DAY_SYMPTOMS);
}
export function setDaySymptomsSuccess() {
  return action(Types.SET_DAY_SYMPTOMS_SUCCESS);
}

export function setDaySymptomsError() {
  return action(Types.SET_DAY_SYMPTOMS_ERROR);
}
export function clearState() {
  return action(Types.CLEAR);
}

export type SetAction = ActionType<
  | typeof setOldPeriods
  | typeof setOldPeriodsError
  | typeof setOldPeriodsSuccess
  | typeof setPeriodBegin
  | typeof setPeriodBeginSuccess
  | typeof setPeriodBeginError
  | typeof setPeriodEnd
  | typeof setPeriodEndSuccess
  | typeof setPeriodEndError
  | typeof setDaySymptoms
  | typeof setDaySymptomsSuccess
  | typeof setDaySymptomsError
  | typeof clearState
>;
