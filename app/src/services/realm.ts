import Realm from 'realm';
import PeriodSchema, { DisconfortSchema } from 'schemas/PeriodSchema';

const key = new Int8Array(64);

export default function getRealm() {
  return Realm.open({
    // path: 'myrealm',
    schema: [PeriodSchema, DisconfortSchema],
    schemaVersion: 4,
    encryptionKey: key,
  });
}
