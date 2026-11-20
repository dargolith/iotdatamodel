import { readFile, writeFile } from 'node:fs/promises';

const INDEX_URL = new URL('./src/index.js', import.meta.url);
const PACKAGE_URL = new URL('./package.json', import.meta.url);
const VERSION_PATTERN = /datamodelVersion = '[^']+'/g;

const { version } = JSON.parse(await readFile(PACKAGE_URL, 'utf8'));
const datamodelVersion = version.split('.').slice(0, 2).join('.');
console.log('VER:', datamodelVersion);

const source = await readFile(INDEX_URL, 'utf8');
const hasVersionExport = source.search(VERSION_PATTERN) !== -1;

if (!hasVersionExport) {
  console.error('versionexport: no datamodelVersion export found in src/index.js');
  process.exit(1);
}

await writeFile(
  INDEX_URL,
  source.replace(VERSION_PATTERN, `datamodelVersion = '${datamodelVersion}'`),
);
