import joi from 'joi';

export const HasChannel = joi
  .object()
  .meta({ name: 'HasChannel', super: 'E' })
  .unknown()
  .keys({
    id: joi.string().required(),
  });
