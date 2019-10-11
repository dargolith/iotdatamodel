import joi from '@hapi/joi';

export const Configuration = joi
  .object()
  .meta({ name: 'Configuration', super: 'V' })
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
  });
