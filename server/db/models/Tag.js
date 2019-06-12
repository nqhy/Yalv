/* eslint-disable func-names */
import { Schema, model } from 'mongoose';

import { uniqueValidatorPlugin, updateFieldDb, deleteRecord } from './utils';

// Schema Defining
const TagSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
});

// Plugin
uniqueValidatorPlugin(TagSchema);

// Static Methods
TagSchema.statics.createTag = async function(data) {
  const { name, background, textColor } = data;
  const tag = new this({
    name,
    background,
    textColor,
  });
  try {
    const result = await tag.save();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

TagSchema.statics.deleteTag = deleteRecord();

TagSchema.statics.updateTagInfo = updateFieldDb();

export const Tag = model('Tag', TagSchema);
