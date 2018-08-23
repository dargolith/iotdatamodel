import joi from 'joi';

import { Identity } from './Identity';
import { metaMerge } from './utils';

export const User = metaMerge(
  Identity.meta({
    name: 'User',
    super: 'Identity',
  }).keys({
    name: joi.string().required(),
  }),
);
