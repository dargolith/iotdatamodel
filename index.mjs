import assetSchema from './src/entities/Asset.json' with { type: 'json' };
import assetTypeSchema from './src/entities/AssetType.json' with { type: 'json' };
import channelSchema from './src/entities/Channel.json' with { type: 'json' };
import channelTypeSchema from './src/entities/ChannelType.json' with { type: 'json' };
import configSchema from './src/entities/Config.json' with { type: 'json' };
import configTypeSchema from './src/entities/ConfigType.json' with { type: 'json' };
import procedureSchema from './src/entities/Procedure.json' with { type: 'json' };
import procedureTypeSchema from './src/entities/ProcedureType.json' with { type: 'json' };
import ruleSchema from './src/entities/Rule.json' with { type: 'json' };
import thingSchema from './src/entities/Thing.json' with { type: 'json' };
import thingTypeSchema from './src/entities/ThingType.json' with { type: 'json' };
import hasChannelSchema from './src/associations/HasChannel.json' with { type: 'json' };
import hasAssetSchema from './src/associations/HasAsset.json' with { type: 'json' };
import hasConfigSchema from './src/associations/HasConfig.json' with { type: 'json' };
import hasProcedureSchema from './src/associations/HasProcedure.json' with { type: 'json' };
import hasThingSchema from './src/associations/HasThing.json' with { type: 'json' };
import forAssetSchema from './src/associations/ForAsset.json' with { type: 'json' };
import hasTypeSchema from './src/associations/HasType.json' with { type: 'json' };

export const datamodelVersion = '8.1';

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
];

export const associationSchemas = [
  hasChannelSchema,
  hasAssetSchema,
  hasThingSchema,
  hasConfigSchema,
  hasProcedureSchema,
  forAssetSchema,
  hasTypeSchema,
];

export const schemas = [...entitySchemas, ...associationSchemas];
