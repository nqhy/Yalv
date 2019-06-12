/* eslint-disable func-names */
import { i18n } from '../../../config/i18n';
import { castError } from '../../constant/errors';

export const updateFieldDb = (schemaName = '') => async function(id, type, data) {
  try {
    const db = await this.findById(id);
    db[type] = data[type];
    if (schemaName === 'User') {
      await db.save();
      return db.toAuthJSON();
    } return db.save();
  } catch (error) {
    if (error.name === castError) return { error: i18n('validate.recordNotFound') };
    return null; // Consider Others Errors
  }
};
