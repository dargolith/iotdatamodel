import joi from '@hapi/joi';

export const Rule = joi
  .object()
  .meta({ name: 'Rule', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
    name: joi.string().required(),
  });
