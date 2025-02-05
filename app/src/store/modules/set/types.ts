enum Types {
  SET_OLD_PERIODS = 'PERIOD/SET_OLD_PERIODS',
  SET_OLD_PERIODS_ERROR = 'PERIOD/SET_OLD_PERIODS_ERROR',
  SET_OLD_PERIODS_SUCCESS = 'PERIOD/SET_OLD_PERIODS_SUCCESS',
  SET_BEGIN = 'PERIOD/SET_BEGIN',
  SET_BEGIN_ERROR = 'PERIOD/SET_BEGIN_ERROR',
  SET_BEGIN_SUCCESS = 'PERIOD/SET_BEGIN_SUCCESS',
  SET_END = 'PERIOD/SET_END',
  SET_END_ERROR = 'PERIOD/SET_END_ERROR',
  SET_END_SUCCESS = 'PERIOD/SET_END_SUCCESS',
  SET_DAY_DISCONFORT = 'PERIOD/SET_DAY_DISCONFORT',
  SET_DAY_DISCONFORT_ERROR = 'PERIOD/SET_DAY_DISCONFORT_ERROR',
  SET_DAY_DISCONFORT_SUCCESS = 'PERIOD/SET_DAY_DISCONFORT_SUCCESS',
  CLEAR = 'PERIOD/CLEAR',
}
export interface SetState {
  readonly loading: boolean;
  readonly error: string | undefined;
  readonly success: boolean;
}

export default Types;
