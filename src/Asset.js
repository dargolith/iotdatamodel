import joi from 'joi';

export const Asset = joi
  .object()
  .meta({ name: 'Asset', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
    name: joi.string().required(),
    channels: joi.object().pattern(joi.any(), joi.string()), // TODO: string->rid
  });
