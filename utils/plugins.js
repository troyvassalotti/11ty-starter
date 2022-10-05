/**
 * @file Site plugins
 */
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = {
  highlighting: {
    name: syntaxHighlight,
  },
  rss: {
    name: pluginRss,
  },
  inclusiveLanguage: {
    name: inclusiveLangPlugin,
  },
};
