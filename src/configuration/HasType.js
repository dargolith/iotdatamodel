import joi from '@hapi/joi';

export const HasType = joi
  .object()
  .meta({ name: 'HasType', super: 'E', uniqueEdge: true })
  .unknown();
