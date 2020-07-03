import joi from '@hapi/joi';

export const Role = joi
  .object()
  .meta({ name: 'Role', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
    name: joi.string().required(),
    // TODO: Specify sub, pub, rpc access objects more thoroughly?
    rpc: joi.object(),
    pub: joi.object(),
    sub: joi.object(),
  });
