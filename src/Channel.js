import joi from 'joi';

export const Channel = joi
  .object()
  .meta({ name: 'Channel', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required(),
    name: joi.string().required(),
  });
