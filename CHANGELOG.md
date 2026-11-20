# Changelog

All notable changes to this package are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and versions follow
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `connections` export: every allowed connection as `{ association, from, to, property }`. A
  connection that is not listed is not allowed.
- Single schemas can be imported as JSON: `iotdatamodel/entities/<Title>.json` and
  `iotdatamodel/associations/<Title>.json`.
- `CHANGELOG.md`, shipped with the package.
- README sections on usage, schema conventions and versioning.

### Changed

- **BREAKING** The package ships its ES module source (`src/`) instead of bundles. The entry point
  imports the schemas with JSON import attributes (`with { type: 'json' }`), so the consuming
  runtime or bundler must support them. Migration:
  - ES module `import` from `'iotdatamodel'`: no change.
  - CommonJS `require('iotdatamodel')`: works on Node 22.12 or later. On older Node, use
    `await import('iotdatamodel')` or stay on 9.x.
- **BREAKING** Minimum Node version is 22 (was 14.17).
- **BREAKING** Every property with `link` also has the custom keyword `via`, naming the association
  that carries the link. Migration: validators that reject unknown keywords must register `via`
  next to `meta`, `link` and `index`.

### Removed

- **BREAKING** `dist/iotdm.cjs` and `dist/iotdm.es.js`. Import from `'iotdatamodel'` instead of a
  `dist/` path.
- Development files (`test.mjs`, `versionexport.js`, `vite.config.js`) from the published package.

### Fixed

- `name` description of `Channel` and `ConfigType` no longer refers to Asset.
- Grammar in the `HasThing` description.

## [9.1.1] - 2026-10-21

### Changed

- `Rule.cooldown` has `minimum: 0`.

### Fixed

- Package entry points resolve to the built files: `require` to `dist/iotdm.cjs`, `import` to
  `dist/iotdm.es.js`.

## [9.1.0] - 2026-08-21

### Added

- `assetProjection` on `Rule`.

## [9.0.1] - 2025-08-21

### Fixed

- `import` entry point refers to `dist/iotdm.es.js`.

## [9.0.0] - 2025-03-13

### Added

- `historyConf` on `Channel`.

### Removed

- **BREAKING** UMD build (`dist/iotdm.umd.js`) and the `unpkg`/`umd:main` entries. Use the ES module
  or CommonJS build.

Earlier releases are recorded only as git tags.

[Unreleased]: https://github.com/dargolith/iotdatamodel/compare/v9.1.1...HEAD
[9.1.1]: https://github.com/dargolith/iotdatamodel/compare/v9.1.0...v9.1.1
[9.1.0]: https://github.com/dargolith/iotdatamodel/compare/v9.0.1...v9.1.0
[9.0.1]: https://github.com/dargolith/iotdatamodel/compare/v9.0.0...v9.0.1
[9.0.0]: https://github.com/dargolith/iotdatamodel/compare/v8.1.0...v9.0.0
