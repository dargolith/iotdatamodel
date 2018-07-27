import pt from 'prop-types';

export const transformable = pt.array;
export const transformableOr = typeSpec =>
  pt.oneOfType([typeSpec, transformable]);

// ----- GENERIC DATA MODEL ----------------------------------------

export const assetTypeMinimum = {
  id: pt.string.isRequired,
};
export const assetTypeMinimumShape = pt.shape(assetTypeMinimum);

export const rpcMinimum = {
  id: pt.string.isRequired,
};
export const rpcMinimumShape = pt.shape(rpcMinimum);

export const assetMinimum = {
  id: pt.string.isRequired,
  name: pt.string.isRequired,
};
export const assetMinimumShape = pt.shape(assetMinimum);

export const thingMinimum = {};
export const thingMinimumShape = pt.shape(thingMinimum);

export const configMinimum = {};
export const configMinimumShape = pt.shape(configMinimum);

export const thingTypeMinimum = {};
export const thingTypeMinimumShape = pt.shape(thingTypeMinimum);

export const channelTypeMinimum = {};
export const channelTypeMinimumShape = pt.shape(channelTypeMinimum);

export const roleMinimum = {
  // TODO: specify!
  name: pt.string,
  sub: pt.object,
  pub: pt.object,
  rpc: pt.object,
};
export const roleMinimumShape = pt.shape(roleMinimum);

export const ruleMinimum = {
  // TODO: specify!
  name: pt.string,
  active: pt.bool,
  ttl: pt.number,
  triggers: pt.object,
  externalData: pt.object,
  condition: pt.object,
  resetCondition: pt.object,
  actions: pt.object,
  resetActions: pt.object,
  cooldown: pt.number,
  actuator: pt.string,
};
export const ruleMinimumShape = pt.shape(ruleMinimum);

export const userMinimum = {
  id: pt.string.isRequired,
  name: pt.string.isRequired,
};
export const userMinimumShape = pt.shape(userMinimum);

export const channelMinimum = {
  id: pt.string.isRequired,
  historyConf: pt.object, // TODO: specify
};
export const channelMinimumShape = pt.shape(channelMinimum);

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
