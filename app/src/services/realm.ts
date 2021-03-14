import Realm from 'realm';
import PeriodSchema from 'schemas/PeriodSchema';

const key = new Int8Array(64);

export default function getRealm() {
  return Realm.open({
    // path: 'myrealm',
    schema: [PeriodSchema],
    schemaVersion: 2,
    encryptionKey: key,
  });
}
