import mongoose from 'mongoose';
import { logger } from './logger';
import { i18n } from '../../config/i18n';

const connect = () => {
  mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds149146.mlab.com:49146/yalv`, {
    useNewUrlParser: true,
  })
    .then(() => {
      logger.info(i18n('message.success.connect'));
    })
    .catch(err => {
      logger.error(`${i18n('message.failure.connect')} => ${err}`);
    });
};

export default connect;
