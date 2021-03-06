
/* eslint-disable func-names */

export const findPopulate = (type) => async function(id) {
  try {
    const object = await this
      .findById(id)
      .populate(type);
    return object[type];
  } catch (error) {
    return { error: error.message };
  }
};
