import joi from 'joi';

export const AssetType = joi
  .object()
  .meta({ name: 'AssetType', super: 'V' })
  .unknown()
  .keys({
    rid: joi.string().required(),
    id: joi
      .string()
      .required()
      .meta({ unique: true }),
  });
