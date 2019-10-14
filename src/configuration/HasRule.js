import joi from '@hapi/joi';

export const HasRule = joi
  .object()
  .meta({ name: 'HasRule', super: 'E', uniqueEdge: true })
  .unknown();
