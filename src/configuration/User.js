import joi from 'joi';

import { Identity } from './Identity';
import { metaMerge } from '../utils';

export const User = metaMerge(
  Identity.meta({
    name: 'User',
    super: 'Identity',
  }).keys({
    id: joi.string().meta({ unique: true, inherited: true }),
    name: joi.string().required(),
  }),
);
