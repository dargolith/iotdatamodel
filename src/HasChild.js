import joi from 'joi';

export const HasChild = joi
  .object()
  .meta({ name: 'HasChild', super: 'E', uniqueEdge: true })
  .unknown();
