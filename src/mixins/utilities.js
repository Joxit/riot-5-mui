
const attributeToBool = (attribute) => {
  if (attribute === '' || attribute === 'true') {
    return true;
  }
  return false;
}

const tryCall = function(fn) {
  if (typeof fn === 'function') {
    const deconstruction = new Array(...arguments).slice(1)
    fn(...deconstruction)
  }
};

export { attributeToBool, tryCall };