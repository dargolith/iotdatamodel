import joi from '@hapi/joi';

export const AssetType = joi
  .object()
  .meta({ name: 'AssetType', super: 'V' })
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
  });
