/**
 * Lists the connections a set of entity schemas allows: one per property that has `link` & `via`.
 * A connection absent from the list is not allowed.
 *
 * @param {{ title: string, properties: Record<string, { link?: string, via?: string }> }[]} entitySchemas
 * @returns {{ association: string, from: string, to: string, property: string }[]}
 */
export const toConnections = (entitySchemas) =>
  entitySchemas.flatMap(({ title: from, properties }) =>
    Object.entries(properties).flatMap(([property, { link: to, via: association }]) =>
      to === undefined || association === undefined ? [] : [{ association, from, to, property }],
    ),
  );
