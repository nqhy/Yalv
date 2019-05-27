import mongoose from 'mongoose';
import { logger } from './logger';

import { env } from '../../config/enviroment';

const connect = () => {
  console.log(env.mlabUser);
  mongoose.connect(`mongodb://${env.mlabUser}:${env.mlabUser}>@ds149146.mlab.com:49146/yalv`, {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    family: 4,
  })
    .then(() => {
      logger.info('Database connection succesful');
    })
    .catch(err => {
      logger.error(`Database connection error => ${err}`);
    });
};

export default connect;
export { options } from './swagger';
