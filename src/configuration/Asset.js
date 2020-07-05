import joi from '@hapi/joi';

export const Asset = joi
  .object()
  .meta({ name: 'Asset', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required().meta({ unique: true }),
    name: joi.string().required(),
    type: joi.string().meta({ linked: true }),
    channels: joi.object().pattern(joi.any(), joi.string()).meta({ linked: true }),
    children: joi.array().items(joi.string()).meta({ linked: true }),
    parents: joi.array().items(joi.string()).meta({ linked: true }),
  });
