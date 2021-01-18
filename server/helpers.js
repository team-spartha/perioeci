const sortObj = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).sort(predicate));

module.exports = {
  sortObj
}