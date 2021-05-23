
const attributeToBool = (attribute) => {
  if (attribute === '' || attribute === 'true') {
    return true;
  }
  return false;
}

export { attributeToBool };