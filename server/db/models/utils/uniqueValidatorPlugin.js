import uniqueValidator from 'mongoose-unique-validator';

import { i18n } from '../../../config/i18n';

export const uniqueValidatorPlugin = (Schema) => Schema.plugin(uniqueValidator, { message: i18n('validate.taken') });
