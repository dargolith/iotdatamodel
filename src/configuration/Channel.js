import joi from 'joi';

export const Channel = joi
  .object()
  .meta({ name: 'Channel', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required().meta({ unique: true }),
    name: joi.string().required(),
    type: joi.string().meta({ linked: 'ChannelType' }),
    history: joi.object().keys({
      enabled: joi.boolean(),
      limit: joi.number().positive(),
      ttl: joi.number().positive(),
    }),
    tags: joi.array().items(joi.string()),
  });
