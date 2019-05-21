import mongoose from 'mongoose';

export const ObjectId = mongoose.Schema.Types.ObjectId;

// Common Regexp
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Common Validator
export const validateLength = (name, attribute) => {
  name.schema.path(attribute).validate((value) => {
    return value && value.length < 100;
  }, 'Lenght must be less than 100 characters');
}
