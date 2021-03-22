import { ActionType, action } from 'typesafe-actions';
import Types from './types';
import FormValues from 'models/OldPeriods';

export function setOldPeriods(periods: FormValues) {
  return action(Types.SET_OLD_PERIODS, { periods });
}

export function setOldPeriodsSuccess() {
  return action(Types.SET_OLD_PERIODS_SUCCESS);
}

export function setOldPeriodsError(error: string) {
  return action(Types.SET_OLD_PERIODS_ERROR, { error });
}

export function setPeriodBegin(start: Date) {
  return action(Types.SET_BEGIN, { start });
}
export function setPeriodBeginSuccess() {
  return action(Types.SET_BEGIN_SUCCESS);
}

export function setPeriodBeginError(error: string) {
  return action(Types.SET_BEGIN_ERROR, { error });
}
export function setPeriodEnd(end: Date) {
  return action(Types.SET_END, { end });
}
export function setPeriodEndSuccess() {
  return action(Types.SET_END_SUCCESS);
}

export function setPeriodEndError(error: string) {
  return action(Types.SET_END_ERROR, { error });
}

export function setDayDisconfort(props: { date: Date; symptoms: string[] }) {
  return action(Types.SET_DAY_DISCONFORT, props);
}
export function setDayDisconfortSuccess() {
  return action(Types.SET_DAY_DISCONFORT_SUCCESS);
}

export function setDayDisconfortError(error: string) {
  return action(Types.SET_DAY_DISCONFORT_ERROR, { error });
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
  | typeof setDayDisconfort
  | typeof setDayDisconfortSuccess
  | typeof setDayDisconfortError
  | typeof clearState
>;
