const replace = (await import('replace')).default;
const packjson = await import('./package.json', { assert: { type: 'json' } });

const ver = packjson.default.version;
const x = ver.split('.').slice(0, -1).join('.');
// console.log(x);

replace({
  regex: "datamodelVersion = '[0-9.]+'",
  replacement: `datamodelVersion = '${x}'`,
  paths: ['./index.mjs'],
  recursive: false,
  silent: false,
});
