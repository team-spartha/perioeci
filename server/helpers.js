const sortObj = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).sort(predicate));

const filterObj = (obj, predicate) =>
  Object.fromEntries(Object.entries(obj).filter(predicate));

const sliceObj = (obj, ...args) =>
  Object.fromEntries(Object.entries(obj).slice(...args));

function flattenObj(obj, parent, res = {}) {
  for (const key in obj) {
    const propName = parent ? parent + "." + key : key;
    if (typeof obj[key] == "object")
      flattenObj(obj[key], propName, res);
    else res[propName] = obj[key];
  }
  return res;
}

module.exports = {
  sortObj,
  filterObj,
  sliceObj,
  flattenObj
}