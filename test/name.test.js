import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import { getPackageName } from '../lib/name.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('readMarkDownFileSync', () => {
  const markdown = getPackageName(path.resolve(__dirname, '../fixtures/package.json'));
  expect(markdown.trim()).toStrictEqual('md2html');
});
