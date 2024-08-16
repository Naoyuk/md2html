import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';
import { marked } from 'marked';
import { readMarkDownFileSync, changeExtensionToHtml, writeHtmlFileSync } from '../lib/file.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('readMarkDownFileSync', () => {
  const markdown = readMarkDownFileSync(path.resolve(__dirname, './fixtures/test.md'));
  expect(markdown.trim()).toStrictEqual('**test**');
});

test('changeExtensionToHtml', () => {
  const htmlFile = changeExtensionToHtml('test.md');
  expect(htmlFile).toStrictEqual('test.html');
});

test('writeHtmlFileSync', () => {
  const mdPath = path.resolve(__dirname, './fixtures/test.md')
  const htmlPath = path.resolve(__dirname, '../tmp/test.html');

  const markdownStr = readMarkDownFileSync(mdPath); 
  const html = marked(markdownStr);
  writeHtmlFileSync(htmlPath, html);
  const htmlStr = fs.readFileSync(htmlPath, { encoding: 'utf8' });
  expect(htmlStr.trim()).toStrictEqual('<p><strong>test</strong></p>');
});
