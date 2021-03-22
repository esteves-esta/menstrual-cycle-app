import Realm from 'realm';

export default class PeriodSchema extends Realm.Object {
  static schema = {
    name: 'Period',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      start: 'date',
      end: 'date?',
      days: { type: 'int', default: 0 },
      cycleDuration: { type: 'int', default: 0 },
      symptoms: 'string?',
      daysDisconforts: 'Disconfort[]',
    },
  };
}

export class DisconfortSchema extends Realm.Object {
  static schema = {
    name: 'Disconfort',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      date: 'date',
      symptoms: 'string[]',
    },
  };
}
