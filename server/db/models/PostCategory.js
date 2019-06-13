/* eslint-disable func-names */
import { Schema, model } from 'mongoose';

import { uniqueValidatorPlugin, updateFieldDb, deleteRecord } from './utils';

// Schema Defining
const PostCategorySchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Plugin
uniqueValidatorPlugin(PostCategorySchema);

// Static Methods
PostCategorySchema.statics.createPostCategory = async function(data) {
  const { name, image, style } = data;
  const postCategory = new this({
    name,
    style,
    image,
  });

  try {
    const result = await postCategory.save();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

PostCategorySchema.statics.deletePostCategory = deleteRecord();

PostCategorySchema.statics.updatePostCategoryInfo = updateFieldDb();


export const PostCategory = model('PostCategory', PostCategorySchema);
