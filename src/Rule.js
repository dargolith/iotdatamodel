import joi from 'joi';

export const Rule = joi
  .object()
  .unknown()
  .keys({
    rid: joi.string().required(),
    name: joi.string(),
    active: joi.boolean(),
    actuator: joi.string(),
    ttl: joi.date(),
    cooldown: joi.number().min(0),

    triggers: joi.object().keys({
      channels: joi.array().items(joi.string()),
    }),
    externalData: joi.object().pattern(
      joi.any(),
      joi
        .array()
        .min(1)
        .items(joi.string().required(), joi.object()),
    ),
    process: joi.object().unknown(),
    condition: joi.object(),
    actions: joi.object(),
    resetCondition: joi.object(),
    resetActions: joi.object(),
  });
