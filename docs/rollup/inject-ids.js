import { parse as htmlParser } from 'node-html-parser';

const injectId = (header) => {
  header.setAttribute('id', header.innerHTML.toLowerCase().replace(/[ ]/g, '-'));
};

const transform = (src, id) => {
  if (/docs\/src\/pages\/[a-z]+\.riot$/.test(id)) {
    const root = htmlParser(src);
    root.querySelectorAll('h1').forEach(header => injectId(header))
    root.querySelectorAll('h2').forEach(header => injectId(header))
    root.querySelectorAll('h3').forEach(header => injectId(header))
    return { code: root.toString(), map: {} };
  }
  return { code: src, map: {} };
};

export default function () {
  return { transform };
}
