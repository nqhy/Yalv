import mongoose from 'mongoose';
import { logger } from './logger';

const connect = () => {
  mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds149146.mlab.com:49146/yalv`, {
    useNewUrlParser: true,
  })
    .then(() => {
      logger.info('Database connection succesful');
    })
    .catch(err => {
      logger.error(`Database connection error => ${err}`);
    });
};

export default connect;
