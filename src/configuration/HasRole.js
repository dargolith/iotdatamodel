import joi from '@hapi/joi';

export const HasRole = joi
  .object()
  .meta({ name: 'HasRole', super: 'E', uniqueEdge: true })
  .unknown();
