/**
 * @file Store the site's current environment in a variable that can be used in templates.
 * @type {{environment: string}}
 */
module.exports = {
  environment: process.env.ELEVENTY_ENV,
};
