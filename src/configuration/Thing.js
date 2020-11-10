import joi from 'joi';

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
