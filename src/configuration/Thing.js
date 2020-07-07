import joi from '@hapi/joi';

import { Identity } from './Identity';
import { metaMerge } from '../utils';

export const Thing = metaMerge(
  Identity.meta({
    name: 'Thing',
    super: 'Identity',
  }).keys({
    type: joi.string().meta({ linked: 'ThingType' }),
  }),
);
