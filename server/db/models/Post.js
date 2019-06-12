/* eslint-disable func-names */
import { Schema, model } from 'mongoose';

import { uniqueValidatorPlugin, updateFieldDb, deleteRecord, findPopulate } from './utils';

// Schema Defining
const PostSchema = new Schema({
  title: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: {
    type: String,
    required: true,
  },
  likers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
}, { timestamps: true });

// Plugin
uniqueValidatorPlugin(PostSchema);

// Static Methods
PostSchema.statics.createPost = async function(data) {
  const { title, author, content } = data;
  const post = new this({
    title,
    author,
    content,
  });

  try {
    const result = await post.save();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

PostSchema.statics.deletePost = deleteRecord();

PostSchema.statics.updatePostInfo = updateFieldDb();

PostSchema.statics.findAuthor = findPopulate('author');
PostSchema.statics.findLikers = findPopulate('likers');
PostSchema.statics.findComments = findPopulate('comments');
PostSchema.static.findTags = findPopulate('tags');

export const Post = model('Post', PostSchema);
