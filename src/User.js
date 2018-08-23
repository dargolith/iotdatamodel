import joi from 'joi';

import { Identity } from './Identity';
import { metaMerge } from './utils';

export const User = metaMerge(
  {
    name: 'User',
    super: 'Identity',
  },
  Identity.meta().keys({
    name: joi.string().required(),
  }),
);
