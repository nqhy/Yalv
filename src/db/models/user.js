import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        first: String,
        last: String,
    }
    password: String,
    email: String,
})

userSchema.virtual('fullName').
    get(() => { return this.name.last + this.name.first}).
    set((str) => {
        this.name.fist = str.substr(0, str.indexOf(' '));
        this.name.last = str.substr(str.indexOf(' ') + 1);
    });


