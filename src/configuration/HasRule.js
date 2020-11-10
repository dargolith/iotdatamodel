import joi from 'joi';

export const HasRule = joi
  .object()
  .meta({ name: 'HasRule', super: 'E', uniqueEdge: true })
  .unknown();
