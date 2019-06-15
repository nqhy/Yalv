/* eslint-disable func-names */
import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import { i18n } from '../../config/i18n';
import { iterations, keylen, digest, encoding, sizeRandom, expiration, radix } from '../constant/user';
import { uniqueValidatorPlugin, updateFieldDb } from './utils';

// Schema Defining
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    index: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  bio: String,
  image: String,
  gender: {
    type: String,
    enum: [
      i18n('enum.user.gender.male'),
      i18n('enum.user.gender.female'),
    ],
  },
  phone: {
    type: String,
    required: false,
  },
  birthDay: {
    type: Date,
    default: null,
  },
  hash: String,
  salt: String,
}, { timestamps: true });

// Plugin
uniqueValidatorPlugin(UserSchema);

// Methods Defining
const encryPassword = function(password, salt) {
  return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString(encoding);
};

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(sizeRandom).toString(encoding);
  this.hash = encryPassword(password, this.salt);
};

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + expiration);

  return jwt.sign({
    id: this._id,
    username: this.username,
    email: this.email,
    bio: this.bio,
    image: this.image,
    gender: this.gender,
    phone: this.phone,
    exp: parseInt(exp.getTime() / 1000, radix),
  }, process.env.SECERET_JWT);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    token: this.generateJWT(),
  };
};

// Static Methods
UserSchema.statics.createUser = async function(data) {
  const { username, email, password } = data;
  const user = new this({
    username,
    email,
  });
  user.setPassword(password);
  try {
    const result = await user.save();
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

UserSchema.statics.authenticate = async function(email, password) {
  const user = await this.findOne({ email });
  if (user === null) return { error: i18n('validate.recordNotFound') };
  const hash = encryPassword(password, user.salt);
  if (user.hash === hash) return user.toAuthJSON();
  return { error: i18n('validate.authenticate') };
};

UserSchema.statics.updateUserInfo = updateFieldDb('User');

export const User = mongoose.model('User', UserSchema);
