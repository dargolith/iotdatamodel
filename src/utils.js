import joi from 'joi';
import * as R from 'ramda';

export const metaMerge = R.evolve({
  _meta: R.compose(
    R.of,
    R.reduce((r, meta) => ({ ...r, ...meta }), {}),
  ),
});

export const transformable = joi
  .array()
  .min(1)
  .items(joi.string().required(), joi.any());

export const transformableOr = type => joi.alternatives().try([type, transformable]);
