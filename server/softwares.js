const YAML = require("yaml");
const { readdirSync, readFileSync } = require("fs");

const pagenames = readdirSync(`${__dirname}/software-pages/`);
const pageEntries = pagenames
.map(pagename => [
  pagename.split('.')[0],
  YAML.parse(readFileSync(`${__dirname}/software-pages/${pagename}`, "utf8"))
]);

const softwares = Object.fromEntries(pageEntries);

module.exports = softwares;