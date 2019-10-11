import joi from '@hapi/joi';
import { AssetType as AssetTypeBase } from '../configuration/AssetType';
import { transformableOr } from '../utils';
import { Widget } from './widget';

export const AssetType = AssetTypeBase.keys({
  channels: joi.array().items(joi.string()),
  rpcs: joi.object().pattern(joi.any(), joi.string()),
  widgetsInDashboard: joi.array().items(joi.string(), joi.number()),
  widgets: joi.array().items(Widget),
  childrenList: joi.object().keys({
    columnHeadingLabels: joi.array().items(transformableOr(joi.string())),
    columnValueConf: joi.array().items(joi.string(), joi.func()),
    avatar: joi.alternatives().try(joi.string(), joi.func()),
  }),
  mapPin: joi.object().keys({
    popupInfo: transformableOr(joi.string()),
  }),
});
