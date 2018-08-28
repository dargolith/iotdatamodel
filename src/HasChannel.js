import joi from 'joi';

export const HasChannel = joi
  .object()
  .meta({ name: 'HasChannel', super: 'E', uniqueEdge: true })
  .unknown()
  .keys({});
