import joi from '@hapi/joi';

export const ChannelType = joi
  .object()
  .meta({ name: 'ChannelType', super: 'V' })
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
