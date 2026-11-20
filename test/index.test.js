import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import {
  associationSchemas,
  connections,
  datamodelVersion,
  entitySchemas,
  schemas,
} from '../src/index.js';
import packageJson from '../package.json' with { type: 'json' };

const ID_ROOT = 'https://raw.githubusercontent.com/dargolith/iotdatamodel/master/';
const CUSTOM_KEYWORDS = ['meta', 'link', 'via', 'index'];

const schemaFiles = Object.entries(
  import.meta.glob('../src/**/*.json', { eager: true, import: 'default' }),
).map(([path, schema]) => ({ path: path.replace('../', ''), schema }));

const fileName = (path) => path.split('/').at(-1).replace('.json', '');
const linkTargets = ({ properties }) => Object.values(properties).flatMap(({ link }) => link ?? []);
const viaTargets = ({ properties }) => Object.values(properties).flatMap(({ via }) => via ?? []);
const titlesOf = (schemaList) => schemaList.map(({ title }) => title);
const orientdbSuper = ({ meta }) => meta.orientdb.super;
const createAjv = () => new Ajv({ strict: true, allowUnionTypes: true, keywords: CUSTOM_KEYWORDS });

describe('schema files', () => {
  it('are all exported', () => {
    const exportedIds = schemas.map(({ $id }) => $id).toSorted();
    const fileIds = schemaFiles.map(({ path }) => `${ID_ROOT}${path}`).toSorted();

    expect(exportedIds).toEqual(fileIds);
  });

  it.each(schemaFiles)('$path has the $id of its location', ({ path, schema }) => {
    expect(schema.$id).toBe(`${ID_ROOT}${path}`);
  });

  it.each(schemaFiles)('$path is titled after its file name', ({ path, schema }) => {
    expect(schema.title).toBe(fileName(path));
  });
});

describe('schemas', () => {
  it('are the entity schemas followed by the association schemas', () => {
    expect(schemas).toEqual([...entitySchemas, ...associationSchemas]);
  });

  it('have unique titles', () => {
    const titles = schemas.map(({ title }) => title);

    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(schemas)('$title compiles as strict JSON Schema with the custom keywords', (schema) => {
    expect(() => createAjv().compile(schema)).not.toThrow();
  });

  it.each(schemas)('$title requires only properties it declares', ({ required, properties }) => {
    expect(Object.keys(properties)).toEqual(expect.arrayContaining(required));
  });

  it.each(schemas)('$title links only to entity schemas', (schema) => {
    const entityTitles = entitySchemas.map(({ title }) => title);

    expect(entityTitles).toEqual(expect.arrayContaining(linkTargets(schema)));
  });
});

describe('entitySchemas', () => {
  it.each(entitySchemas)('$title is a vertex', (schema) => {
    expect(orientdbSuper(schema)).toBe('V');
  });
});

describe('associationSchemas', () => {
  it.each(associationSchemas)('$title is an edge', (schema) => {
    expect(orientdbSuper(schema)).toBe('E');
  });
});

describe('link properties', () => {
  it.each(schemas)('of $title name an association in via', (schema) => {
    expect(titlesOf(associationSchemas)).toEqual(expect.arrayContaining(viaTargets(schema)));
  });

  it.each(schemas)('of $title have via exactly when they have link', ({ properties }) => {
    const unpaired = Object.entries(properties)
      .filter(([, { link, via }]) => (link === undefined) !== (via === undefined))
      .map(([property]) => property);

    expect(unpaired).toEqual([]);
  });
});

describe('connections', () => {
  it('hold one entry per link property', () => {
    expect(connections).toHaveLength(entitySchemas.flatMap(linkTargets).length);
  });

  it('use every association', () => {
    const usedAssociations = new Set(connections.map(({ association }) => association));

    expect(usedAssociations).toEqual(new Set(titlesOf(associationSchemas)));
  });

  it('let ConfigType connect only to Config', () => {
    const withConfigType = connections.filter(
      ({ from, to }) => from === 'ConfigType' || to === 'ConfigType',
    );

    expect(withConfigType).toEqual([
      { association: 'HasType', from: 'Config', to: 'ConfigType', property: 'type' },
    ]);
  });

  it('connect Rule to Asset through ForAsset', () => {
    expect(connections).toContainEqual({
      association: 'ForAsset',
      from: 'Rule',
      to: 'Asset',
      property: 'assets',
    });
  });
});

describe('datamodelVersion', () => {
  it('is the major.minor of the package version', () => {
    const [major, minor] = packageJson.version.split('.');

    expect(datamodelVersion).toBe(`${major}.${minor}`);
  });
});
