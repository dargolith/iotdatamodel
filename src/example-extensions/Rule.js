import joi from '@hapi/joi';
import { Rule as RuleBase } from '../configuration/Rule';

export const Rule = RuleBase.keys({
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
