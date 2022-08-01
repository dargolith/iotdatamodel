import assetSchema from './src/entities/Asset.json';
import assetTypeSchema from './src/entities/AssetType.json';
import channelSchema from './src/entities/Channel.json';
import channelTypeSchema from './src/entities/ChannelType.json';
import configSchema from './src/entities/Config.json';
import configTypeSchema from './src/entities/ConfigType.json';
import procedureSchema from './src/entities/Procedure.json';
import procedureTypeSchema from './src/entities/ProcedureType.json';
import ruleSchema from './src/entities/Rule.json';
import thingSchema from './src/entities/Thing.json';
import thingTypeSchema from './src/entities/ThingType.json';
import hasChannelSchema from './src/associations/HasChannel.json';
import hasAssetSchema from './src/associations/HasAsset.json';
import hasConfigSchema from './src/associations/HasConfig.json';
import hasProcedureSchema from './src/associations/HasProcedure.json';
import forAssetSchema from './src/associations/ForAsset.json';
import hasTypeSchema from './src/associations/HasType.json';

export const datamodelVersion = '8.0';

export const entitySchemas = [
  assetSchema,
  assetTypeSchema,
  channelSchema,
  channelTypeSchema,
  configSchema,
  configTypeSchema,
  procedureSchema,
  procedureTypeSchema,
  ruleSchema,
  thingSchema,
  thingTypeSchema,
  triggerSchema,
];

export const associationSchemas = [
  hasChannelSchema,
  hasAssetSchema,
  hasConfigSchema,
  hasProcedureSchema,
  forAssetSchema,
  hasTypeSchema,
];

export const schemas = [...entitySchemas, ...associationSchemas];
