import { Schema } from 'mongoose';

import { validateLength } from './common';
import i18next from 'i18next';

export const name= new Schema({
	first: {
		type: String,
    lowercase: true,
    trim: true,
		required: [true, i18next('validate.userSchema.required.first')],
		maxlength: 100,
		minlength: 6,
	 },
	last: {
		type: String,
    lowercase: true,
    trim: true,
		required: [true, i18n('validate.userSchema.required.last')],
	 	maxlength: 100,
	 	minlength: 6,
	},
})

validateLength(name, 'first');
validateLength(name, 'last');