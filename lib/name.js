import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageStr = fs.readFileSync(path.resolve(__dirname, '../package.json'), { encoding: 'utf8' });
const pkg = JSON.parse(packageStr);

export const getPackageName = () => {
  return pkg.name;
}
