import { Connection } from 'mongoose';
import { DB_PROVIDER, JOB_MODEL_PROVIDER } from '../constants';
import { JobSchema } from './schemas/job.schema';

export const jobProviders = [{
  provide: JOB_MODEL_PROVIDER,
  useFactory: (connection: Connection) => connection.model('Job', JobSchema),
  inject: [DB_PROVIDER],
}];
