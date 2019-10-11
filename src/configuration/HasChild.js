import joi from '@hapi/joi';

export const HasChild = joi
  .object()
  .meta({ name: 'HasChild', super: 'E', uniqueEdge: true })
  .unknown();
