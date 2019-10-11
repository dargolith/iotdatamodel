import joi from '@hapi/joi';
import { ChannelType as ChannelTypeBase } from '../configuration/ChannelType';
import { Widget } from './widget';

export const ChannelType = ChannelTypeBase.keys({
  units: joi.array().items(joi.any()),
  legend: joi.array().items(joi.string()),
  widgets: joi.array().items(Widget),
  // name: joi.string(),
  // ttl: joi.date(),
  // toTranslate: joi.array().items(joi.string()) // paths. ex: 'pl[0].text'
});
