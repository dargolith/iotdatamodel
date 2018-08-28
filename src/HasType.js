import joi from 'joi';

export const HasType = joi
  .object()
  .meta({ name: 'HasType', super: 'E', uniqueEdge: true })
  .unknown();
