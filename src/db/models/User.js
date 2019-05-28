/* eslint-disable func-names */

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import { nameRegExp, emailRegExp } from '../constant/regexp';
import { i18n } from '../../config/i18n';

// Schema Defining
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, i18n('validate.blank')],
    match: [nameRegExp, i18n('validate.invalid')],
    index: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, i18n('validate.blank')],
    match: [emailRegExp, i18n('validate.invalid')],
  },
  bio: String,
  image: String,
  hash: String,
  salt: String,
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: i18n('validate.taken') });

// Methods Defining
const encryPassword = function(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.halt = encryPassword(password, this.salt);
};

UserSchema.methods.validPassword = function(password) {
  const hash = encryPassword(password, this.salt);
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000, 10),
  }, process.env.SECERET_JWT);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    image: this.image,
  };
};

export const User = mongoose.model('User', UserSchema);
