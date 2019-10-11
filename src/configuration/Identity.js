import joi from '@hapi/joi';

export const Identity = joi
  .object()
  .meta({ name: 'Identity', super: 'V', abstract: true })
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
