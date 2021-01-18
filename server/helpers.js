const sortObj = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).sort(predicate));

const filterObj = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).filter(predicate));

const sliceObj = (obj, ...args) =>
  Object.fromEntries(Object.entries(obj).slice(...args));

module.exports = {
  sortObj,
  filterObj,
  sliceObj
}