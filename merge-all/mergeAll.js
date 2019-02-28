
function mergeAll(arr) {
  return arr.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

export {
  mergeAll,
};
