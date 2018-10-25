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
    // type: joi.string(),
    // channels: joi.object().pattern(joi.any(), joi.string()),
    // children: joi.array().items(joi.string()),
    // parents: joi.array().items(joi.string()),
  });
