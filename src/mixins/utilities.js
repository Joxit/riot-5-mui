const attributeToBool = (attribute) => {
  if (attribute === '' || attribute === 'true') {
    return true;
  }
  return false;
};

const tryCall = function (fn) {
  if (typeof fn === 'function') {
    const deconstruction = new Array(...arguments).slice(1);
    fn(...deconstruction);
  }
};

const HTML = {};

HTML.array = (element) => {
  if (!element) {
    return [];
  }
  let array = [];
  for (let i = 0; i < element.length; i++) {
    array.push(element.item(i));
  }
  return array;
};

HTML.children = (element) => HTML.array(element && element.children);

const attributesObj = (supported, props) =>
  supported.reduce((attributes, attr) => {
    attributes[attr] = attributeToBool(props[attr]);
    return attributes;
  }, {});

export { attributeToBool, tryCall, HTML, attributesObj };
