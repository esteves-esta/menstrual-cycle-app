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
    },
  };
}

/* 
- pegar a media de duracao de ciclos
- ultimo period
  - pegar comeco e adicionar duracao de 
ciclo para pegar o proximo
- sintomas
 */
