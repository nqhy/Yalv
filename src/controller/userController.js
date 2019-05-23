import boom from 'boom';

import { User } from '../db/models/User';

export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const getUserById = async (req) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const addUser = async (req) => {
  try {
    const user = new User(req.body);
    return user.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const updateUser = async (req) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const { ...updateData } = user;
    const update = await User.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export const deleteUser = async (req) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};
