import joi from 'joi';

export const Asset = joi
  .object()
  .meta({ name: 'Asset', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required(),
    name: joi.string().required(),
  });
