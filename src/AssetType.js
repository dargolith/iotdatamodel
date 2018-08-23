import joi from 'joi';

export const AssetType = joi.object().keys({
  rid: joi.string().required(),
  id: joi.string().required(),
});
