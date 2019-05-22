import { Schema, Model } from 'mongoose';
import uuid from 'node-uuid';
import bcrypt from 'bcrypt';

import { ObjectId, emailRegex } from './common';
import { nameSchema } from './name';
import { i18n } from '../../config/i18n';

const validateEmail = (email) => emailRegex.test(email);

const userSchema = new Schema({
	_parent: ObjectId,
	name: { type: nameSchema },
	passwordHash: { type: String, required: true},
	passwordResetToken: String,
	passwordResetExpiration: Date,
	email: {
		type: String,
		lowercase: true,
		index: true,
		unique: true,
		validate: {
			validateEmail,
			message: p => `${p.value} is not a valid email Address`,
		}
	},
	emailConfirmationToken: { type: String, default: uuid },
	phone: { type: Number, min: 10, max: 11 },
	active: { type: Boolean, required: true, default: true},
	role: { type: String, enum: ['user', 'admin'], default: 'user', required: true},
	lastUpdatedBy: { type: String, required: true, default: 'System' },
	lastUpdatedDate: { type: Date, required: true, default: new Date()},
	lastIPAddress: String,
	favorites: { type: Map, of: String },
	picture: { type: String, get: p => `root${p}`} // Root AWS S3 will be implement later.
})

//Virtual Methods
userSchema.virtual('password')
	.get(() => this._password)
	.set((value) => {
		this._password = value;
		const salt = bcrypt.genSaltSync(12);
		this.passwordHash = bcrypt.hashSync(value, salt);
	})

userSchema.virtual('passwordConfirmation')
	.get(() => this._passwrodConfirmation)
	.set((value) => this._passwrodConfirmation = value)

userSchema.virtual('passwordHash').validate((v) => {
	if (this._password || this._passwordConfirmation) {
		if (this._password.length < 6) {
			this.invalidate('password', i18n('validate.userSchema.password.minLength'));
		}
		if (this._password !== this._passwordConfirmation) {
			this.invalidate('passwordConfirmation', i18n('validate.userSchema.confirm'));
		}
	}
});

userSchema.virtual('fullName').
	get(() => { return this.name.last + this.name.first}).
	set((str) => {
			this.name.fist = str.substr(0, str.indexOf(' '));
			this.name.last = str.substr(str.indexOf(' ') + 1);
	});

export const User = Model('User', userSchema);
