import joi from 'joi';

export const HasRole = joi
  .object()
  .meta({ name: 'HasRole', super: 'E', uniqueEdge: true })
  .unknown();
