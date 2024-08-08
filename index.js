const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkDownFileSync } = require('./lib/file');

const { argv } = yargs(hideBin(process.argv))
  .option('name', {
    describe: 'Show the name of the CLI tool'
  })
  .option('file', {
    describe: 'The path of the Markdown file'
  });

if (argv.name) {
  const name = getPackageName()
  console.log(name);
  process.exit(0);
}

const markdownStr = readMarkDownFileSync(path.resolve(__dirname, argv.file));
console.log(markdownStr);
