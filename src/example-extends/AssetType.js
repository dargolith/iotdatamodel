import joi from 'joi';
import { AssetType as AssetTypeBase } from '../AssetType';
import { transformable, transformableOr } from '../utils';

const WidgetMenuItem = joi.object().keys({
  label: transformableOr(joi.string()).required(),
  icon: joi.string(),
  method: transformable.required(),
});

const Widget = joi
  .object()
  .unknown()
  .keys({
    id: joi.string(),
    component: joi.string().required(),
    align: joi.string(),
    justify: joi.string(),
    responsive: joi.boolean(),
    frameProps: joi.object({
      title: transformableOr(joi.string()),
      tooltip: transformableOr(joi.string()),
      menuItems: joi.array().items(WidgetMenuItem),
    }),
    contentProps: joi.object(),
    hoc: transformable,
    initNotifications: joi.number(),
  });

export const AssetType = AssetTypeBase.keys({
  channels: joi.object().pattern(joi.any(), joi.string()),
  rpcs: joi.object().pattern(joi.any(), joi.string()),
  widgetsInDashboard: joi.array().items(joi.string(), joi.number()),
  widgets: joi.array().items(Widget),
});