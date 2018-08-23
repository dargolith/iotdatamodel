import joi from 'joi';
import { transformable } from './utils';

export const Rule = joi
  .object()
  .meta({ name: 'Rule', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
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
    condition: transformable,
    actions: joi.object().keys({
      apiCalls: joi
        .array()
        .items(joi.array().items(joi.string().required(), joi.object().unknown())),
    }),
    resetCondition: joi.object(),
    resetActions: joi.object(),
  });
