import mongoose from 'mongoose';
import { logger } from './logger';

const server = '127.0.0.1:27017';
const database = 'YalvDb';

const connect = () => {
  mongoose.connect(`mongodb://${server}/${database}`, {
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
