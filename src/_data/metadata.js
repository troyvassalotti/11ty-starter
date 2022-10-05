/**
 * @file Global site data
 */
const pkg = require("../../package.json");

module.exports = {
  title: pkg.name,
  description: pkg.description,
  domain: "www.example.com",
  get url() {
    return `https://${this.domain}`;
  },
  repo: "https://github.com/YOUR/REPO",
  handles: {
    twitter: "@"
  },
  rss: {
    title: "RSS Feed Title",
    subtitle: "RSS Feed Description",
    url: pkg.homepage,
    author: {
      name: pkg.author,
      email: "rss@example.com",
    },
  },
};
