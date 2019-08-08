import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constants';
import { environment } from '../environments/environment';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: async (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb://${environment.db.host}:${environment.db.port}/${environment.db.database}`,
        {
          useNewUrlParser: true,
          auth: {
            user: environment.db.username,
            password: environment.db.password,
          },
          bufferMaxEntries: environment.db.bufferMaxEntries,
          reconnectTries: environment.db.reconnectTries,
          reconnectInterval: environment.db.reconnectInterval,
        },
      ),
  },
];
