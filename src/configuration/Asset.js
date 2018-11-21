import joi from 'joi';
import HasType from './HasType';
import AssetType from './AssetType';

export const Asset = joi
  .object()
  .meta({ name: 'Asset', super: 'V' })
  .unknown()
  .keys({
    rid: joi
      .string()
      .required()
      .meta({ unique: true }),
    name: joi.string().required(),
  });

export const AssetDoc = Asset.keys({
  type: joi.string(),
  channels: joi.object().pattern(joi.any(), joi.string()),
  children: joi.array().items(joi.string()),
  parents: joi.array().items(joi.string()),
});

export const AssetEdges = joi.object().keys({
  // TODO: WIP
  out: joi.object().keys({
    type: joi.object().meta({
      class: HasType,
      multiple: false,
      target: AssetType,
    }),
  }),
  in: joi.object().keys(),
});
