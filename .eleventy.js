/**
 * @file Site configuration
 */
const directories = {
  src: "./src",
  utils: "./utils",
};

const filters = require(`${directories.utils}/filters`);
const transforms = require(`${directories.utils}/transforms`);
const plugins = require(`${directories.utils}/plugins`);

module.exports = function (config) {
  // Passthroughs
  config.addPassthroughCopy(`${directories.src}/favicon.ico`);
  config.addPassthroughCopy(`${directories.src}/humans.txt`);
  config.addPassthroughCopy(`${directories.src}/robots.txt`);
  config.addPassthroughCopy(`${directories.src}/public`);

  // Plugins
  Object.keys(plugins).forEach((plugin) => {
    eleventyConfig.addPlugin(plugins[plugin].name, plugins[plugin]?.options);
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

  // Add excerpt support
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: "excerpt",
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      layouts: "_includes/layouts",
    },
  };
};
