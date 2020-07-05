import joi from '@hapi/joi';
// import * as R from 'ramda';

// export const metaMerge = R.evolve({
//   _meta: R.compose(
//     R.of,
//     R.reduce((r, meta) => ({ ...r, ...meta }), {}),
//   ),
// });

// TODO: Make the function below immutable! The above ramda attempt is immutable but breaks the joi
// object. For instance .describe() is no longer present on the resulting object.
export const metaMerge = (schema) => {
  const newMeta = [schema.$_terms.metas.reduce((result, meta) => ({ ...result, ...meta }))];
  // eslint-disable-next-line no-param-reassign
  schema.$_terms.metas = newMeta;
  return schema;
};

export const transformable = joi.array().min(1).items(joi.string().required(), joi.any());

export const transformableOr = (type) => joi.alternatives().try(type, transformable);
