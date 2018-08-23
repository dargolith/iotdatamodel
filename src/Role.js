import joi from 'joi';

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
    sub: joi.object(),
    // TODO: Specify sub, pub, rpc access objects more thoroughly?
    pub: joi.object(),
    rpc: joi.object(),
  });
