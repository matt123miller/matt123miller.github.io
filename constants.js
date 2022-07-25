const { name, description } = require('./package');

const github = 'https://github.com/matt123miller';
const siteRepo = `${github}/matt123miller.github.io`;
const twitter = 'https://twitter.com/matt123miller';
const email = 'matt@m11r.dev';

const links = {
  github,
  siteRepo,
  twitter,
  email,
  baseUrl: 'https://matt123miller.dev',
};

module.exports.links = links;

module.exports.default = {
  links,
  description,
  name,
};
