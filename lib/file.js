const fs = require('fs');
const path = require('path');

exports.readMarkDownFileSync = (path) => {
  const markdownStr = fs.readFileSync(path, { encoding: 'utf-8' });

  return markdownStr;
};

exports.changeExtensionToHtml = (filePath) => {
  const extname = path.extname(filePath);
  const basename = path.basename(filePath, extname);
  const newPath = path.join(path.dirname(filePath), `${basename}.html`);

  return newPath;
};

exports.writeHtmlFileSync = (path, html) => {
  fs.writeFileSync(path, html, { encoding: 'utf-8' });
};
