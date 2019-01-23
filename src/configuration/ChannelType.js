import joi from 'joi';

export const ChannelType = joi
  .object()
  .meta({ name: 'ChannelType', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
    id: joi
      .string()
      .required()
      .meta({ unique: true }),
    type: joi.string(),
    format: joi.string(),
    // unit: joi.array().items(joi.any()),
    // ttl: joi.date(),
    // legend: joi.array().items(joi.string()),
  });
