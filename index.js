function myEach(collection, callback) {
  const arr = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
  return collection;
}

function myReduce(collection, callback, acc) {
  const arr = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  let accumulator = acc !== undefined ? acc : arr[0];
  let startIndex = acc !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], collection);
  }
  return accumulator;
}

function myFind(collection, predicate) {
  const arr = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return arr[i];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const arr = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

function mySize(collection) {
  const arr = Array.isArray(collection) ? collection : Object.keys(collection);
  return arr.length;
}

function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(-n);
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues,
};
