/* eslint-disable func-names */

export const deleteRecord = () => async function(id) {
  this.deleteOne({ id }, (error) => ({ error: error.message }));
};
