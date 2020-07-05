import joi from '@hapi/joi';

export const Procedure = joi
  .object()
  .meta({ name: 'Procedure', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required().meta({ unique: true }),
    id: joi.string().required().meta({ unique: true }),
  });
