import { parse as htmlParser } from 'node-html-parser';
import Prism from 'prismjs';
import prettier from 'prettier';
const prettierOptions = {
  parser: 'html',
  tabWidth: 2,
  printWidth: 120,
};

const formatHTMLExample = (example) => {
  const exampleHTML = example.querySelector('.example-row').innerHTML.trim();
  const formatedExample = prettier.format(exampleHTML, prettierOptions);
  const highlightedExample = Prism.highlight(formatedExample, Prism.languages.html, 'html').replace(/{/g, '&#123;');
  const code = `<pre class="language-html"><code class="language-html">${highlightedExample}</code></pre>`.trim();
  example.querySelector('.example-code').innerHTML = code;
};

const formatPre = (example) => {
  const lang = example.classNames.replace('language-', '');
  if (!lang) {
    return;
  }
  const formatedExample = prettier.format(example.innerHTML, { parser: lang, ...prettierOptions });
  const highlightedExample = Prism.highlight(formatedExample, Prism.languages[lang], lang).replace(/{/g, '&#123;');
  const code = `<code class="language-${lang}">${highlightedExample}</code>`.trim();
  example.innerHTML = code;
};

const transform = (src, id) => {
  if (/docs\/src\/pages\/[a-z]+\.riot$/.test(id)) {
    const root = htmlParser(src);
    root.querySelectorAll('pre').forEach((example) => formatPre(example));
    root.querySelectorAll('.example-container').forEach((example) => formatHTMLExample(example));
    return { code: root.toString(), map: {} };
  }
  return { code: src, map: {} };
};

export default function () {
  return { transform };
}
