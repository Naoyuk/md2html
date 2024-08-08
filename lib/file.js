const fs = require('fs');

exports.readMarkDownFileSync = (path) => {
  const markdownStr = fs.readFileSync(path, { encoding: 'utf-8' });

  return markdownStr;
};
