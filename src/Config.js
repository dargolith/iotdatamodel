import joi from 'joi';

export const Config = joi
  .object()
  .meta({ name: 'Config', super: 'V' })
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
