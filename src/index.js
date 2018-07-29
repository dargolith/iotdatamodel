import pt from 'prop-types';

export const transformable = pt.array;
export const transformableOr = typeSpec => pt.oneOfType([typeSpec, transformable]);

// ----- GENERIC DATA MODEL ----------------------------------------

export const assetMinimum = {
  rid: pt.string.isRequired,
  id: pt.string.isRequired,
  name: pt.string.isRequired,
};
export const assetMinimumShape = pt.shape(assetMinimum);

export const assetTypeMinimum = {
  rid: pt.string.isRequired,
  id: pt.string.isRequired,
};
export const assetTypeMinimumShape = pt.shape(assetTypeMinimum);

export const thingMinimum = {
  rid: pt.string.isRequired,
};
export const thingMinimumShape = pt.shape(thingMinimum);

export const thingTypeMinimum = {
  rid: pt.string.isRequired,
};
export const thingTypeMinimumShape = pt.shape(thingTypeMinimum);

export const configMinimum = {
  rid: pt.string.isRequired,
};
export const configMinimumShape = pt.shape(configMinimum);

export const roleMinimum = {
  // TODO: specify!
  rid: pt.string.isRequired,
  name: pt.string,
  sub: pt.object,
  pub: pt.object,
  rpc: pt.object,
};
export const roleMinimumShape = pt.shape(roleMinimum);

export const ruleMinimum = {
  // TODO: specify!
  rid: pt.string.isRequired,
  name: pt.string,
  active: pt.bool,
  triggers: pt.object,
  externalData: pt.object,
  process: pt.object,
  condition: pt.object,
  actions: pt.object,
  resetCondition: pt.object,
  resetActions: pt.object,
  cooldown: pt.number,
  ttl: pt.number,
  actuator: pt.string,
};
export const ruleMinimumShape = pt.shape(ruleMinimum);

export const userMinimum = {
  rid: pt.string.isRequired,
  id: pt.string.isRequired,
  name: pt.string.isRequired,
};
export const userMinimumShape = pt.shape(userMinimum);

export const channelMinimum = {
  rid: pt.string.isRequired,
  id: pt.string.isRequired,
  historyConf: pt.object, // TODO: specify
};
export const channelMinimumShape = pt.shape(channelMinimum);

export const channelTypeMinimum = {
  rid: pt.string.isRequired,
};
export const channelTypeMinimumShape = pt.shape(channelTypeMinimum);

export const rpcMinimum = {
  rid: pt.string.isRequired,
  id: pt.string.isRequired,
};
export const rpcMinimumShape = pt.shape(rpcMinimum);

// ----- SPECIALICED DATA MODEL ----------------------------------------

export const widgetMenuItem = {
  label: transformableOr(pt.string),
  icon: pt.string,
  method: transformable,
};
export const widgetMenuItemShape = pt.shape(widgetMenuItem);

export const widget = {
  id: pt.string,
  component: pt.string,
  align: pt.string,
  justify: pt.string,
  responsive: pt.bool,
  frameProps: pt.shape({
    title: transformableOr(pt.string),
    menuItems: pt.arrayOf(widgetMenuItemShape),
  }),
  contentProps: pt.object,
  hoc: transformable,
};
export const widgetShape = pt.shape(widget);

export const assetTypeBase = {
  ...assetTypeMinimum,
  channels: pt.objectOf(pt.string),
  rpcs: pt.objectOf(pt.string),
  widgetsInDashboard: pt.arrayOf(pt.oneOfType(pt.string, pt.number)),
  widgets: pt.arrayOf(widgetShape),
};
