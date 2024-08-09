const path = require('path');
const { marked } = require('marked');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkDownFileSync, writeHtmlFileSync } = require('./lib/file');

const { argv } = yargs(hideBin(process.argv))
  .option('name', {
    describe: 'Show the name of the CLI tool'
  })
  .option('file', {
    describe: 'The path of the Markdown file'
  })
  .option('out', {
    describe: 'html file',
    default: 'out.html'
  });

if (argv.name) {
  const name = getPackageName()
  console.log(name);
  process.exit(0);
}

const markdownStr = readMarkDownFileSync(path.resolve(__dirname, argv.file));
console.log(markdownStr);

const html = marked(markdownStr);

writeHtmlFileSync(path.resolve(__dirname, argv.out), html);
