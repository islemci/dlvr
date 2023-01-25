import { minify } from "html-minifier-terser";
import { versions } from "../../deps";

const HTML_MINIFIER_TERSER_VERSION = versions["html-minifier-terser"];
const HTML_MINIFIER_TERSER_LINK_BANNER = [
  "DLVR: https://github.com/so1ve/dlvr",
  "html-minifier-terser: https://github.com/terser/html-minifier-terser",
];

const HTML_BANNER = createHTMLBanner([
  `This HTML file is minified by DLVR using html-minifier-terser@${HTML_MINIFIER_TERSER_VERSION}.`,
  ...HTML_MINIFIER_TERSER_LINK_BANNER,
]);
export const HTMLMinifier = defineMinifier(async (code: string) => HTML_BANNER + await minify(code, {
  includeAutoGeneratedTags: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
}));
