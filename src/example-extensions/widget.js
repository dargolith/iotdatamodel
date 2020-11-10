import joi from 'joi';
import { transformable, transformableOr } from '../utils';

const WidgetMenuItem = joi.object().keys({
  label: transformableOr(joi.string()).required(),
  icon: joi.string(),
  method: transformable.required(),
});

export const Widget = joi
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
    contentProps: transformableOr(joi.object()),
    hoc: transformable,
    initNotifications: joi.number(),
  });
