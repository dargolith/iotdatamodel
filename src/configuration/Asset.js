import joi from '@hapi/joi';

export const Asset = joi
  .object()
  .meta({ name: 'Asset', super: 'V' })
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
    // type: joi.string(),
    // channels: joi.object().pattern(joi.any(), joi.string()),
    // children: joi.array().items(joi.string()),
    // parents: joi.array().items(joi.string()),
  });
