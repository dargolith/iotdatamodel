import joi from 'joi';

export const HasConfiguration = joi
  .object()
  .meta({ name: 'HasConfiguration', super: 'E', uniqueEdge: true })
  .unknown();
