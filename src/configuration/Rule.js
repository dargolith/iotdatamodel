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
    id: joi
      .string()
      .required()
      .meta({ unique: true }),
    active: joi.boolean(),
    actuator: joi.string(),
    ttl: joi.date(),
    cooldown: joi.number().min(0),
    onLoad: joi.array(),
    process: joi.array(),
    condition: joi.array(),
    actions: joi.array(),
    resetCondition: joi.array(),
    resetActions: joi.array(),
    // assets: joi.array().items(joi.string()),
  });
