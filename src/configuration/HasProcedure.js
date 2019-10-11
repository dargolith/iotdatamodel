import joi from '@hapi/joi';

export const HasProcedure = joi
  .object()
  .meta({ name: 'HasProcedure', super: 'E', uniqueEdge: true })
  .unknown();
