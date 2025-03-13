const replace = (await import('replace')).default;
const packjson = await import('./package.json', { with: { type: 'json' } });

const ver = packjson.default.version;
const x = ver.split('.').slice(0, 2).join('.');
// console.log(x);

replace({
  regex: "datamodelVersion = '[^']+'",
  replacement: `datamodelVersion = '${x}'`,
  paths: ['./index.mjs'],
  recursive: false,
  silent: false,
});
