import joi from 'joi';

export const Channel = joi
  .object()
  .meta({ name: 'Channel', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
    name: joi.string().required(),
    historyConf: joi.object().keys({
      enabled: joi.boolean().required(),
      tail: joi.number().positive(),
    }),
    tags: joi.array().items(joi.string()),
  });
