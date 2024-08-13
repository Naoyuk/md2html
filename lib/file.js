import * as fs from 'fs';
import * as path from 'path';

export const readMarkDownFileSync = (path) => {
  const markdownStr = fs.readFileSync(path, { encoding: 'utf8' });

  return markdownStr;
};

export const changeExtensionToHtml = (filePath) => {
  const extname = path.extname(filePath);
  const basename = path.basename(filePath, extname);
  const newPath = path.join(path.dirname(filePath), `${basename}.html`);

  return newPath;
};

export const writeHtmlFileSync = (path, html) => {
  fs.writeFileSync(path, html, { encoding: 'utf8' });
};
