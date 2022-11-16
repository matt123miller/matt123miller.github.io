const { name, description } = require('./package');

const baseUrl = 'https://matt123miller.dev';
const github = 'https://github.com/matt123miller';
const siteRepo = `${github}/matt123miller.github.io`;
const twitter = 'https://twitter.com/matt123miller';
const linkedin = 'https://www.linkedin.com/in/matt123miller/';
const email = 'matt@m11r.dev';

const links = {
  github,
  siteRepo,
  twitter,
  linkedin,
  email,
  baseUrl,
};

module.exports.links = links;

module.exports.default = {
  links,
  description,
  name,
};
