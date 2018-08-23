import joi from 'joi';

export const Identity = joi
  .object()
  .meta({ name: 'Channel', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required(),
    id: joi
      .string()
      .required()
      .meta({ unique: true }),
  });
