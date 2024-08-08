const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
  .option('name', {
    describe: 'Show the name of the CLI tool'
  })
  .option('file', {
    describe: 'The path of the Markdown file'
  });


const packageStr = fs.readFileSync(path.resolve(__dirname, 'package.json'), { encoding: 'utf-8' });
const package = JSON.parse(packageStr);

if (argv.file) {
  console.log(argv.file);
} else if (argv.name) {
  console.log(package.name);
} else {
  console.log('No option.')
}
