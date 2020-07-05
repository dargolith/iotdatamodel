import joi from '@hapi/joi';

export const ThingType = joi
  .object()
  .meta({ name: 'ThingType', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required().meta({ unique: true }),
    id: joi.string().required().meta({ unique: true }),
  });
