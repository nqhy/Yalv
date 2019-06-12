/* eslint-disable func-names */
import { Schema, model } from 'mongoose';

import { uniqueValidatorPlugin, updateFieldDb, deleteRecord, findPopulate } from './utils';

const CommentSchema = new Schema({
  cotnent: {
    type: String,
    lowercase: true,
    unique: true,
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

uniqueValidatorPlugin(CommentSchema);

CommentSchema.statics.updateCommentInfo = updateFieldDb();

CommentSchema.statics.createComment = async function(data) {
  const { content, author_id } = data;
  const comment = new this({
    content,
    author: author_id,
  });
  try {
    const result = await comment.save();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

CommentSchema.statics.deleteComment = deleteRecord();

CommentSchema.statics.findAuthor = findPopulate('author');

export const Commnent = model('Commnent', CommentSchema);
