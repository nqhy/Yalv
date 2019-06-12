/* eslint-disable func-names */

export const findPopulate = (type) => function(id) {
  return this
    .findById(id)
    .populate(type)
    .exec((error, data) => {
      if (error) return { error: error.message };
      return data;
    });
};
