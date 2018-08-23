const R = require('ramda');

export const metaMerge = R.evolve({
  _meta: R.compose(
    R.of,
    R.reduce((r, meta) => ({ ...r, ...meta }), {}),
  ),
});
