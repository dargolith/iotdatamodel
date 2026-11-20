import assetSchema from './entities/Asset.json' with { type: 'json' };
import assetTypeSchema from './entities/AssetType.json' with { type: 'json' };
import channelSchema from './entities/Channel.json' with { type: 'json' };
import channelTypeSchema from './entities/ChannelType.json' with { type: 'json' };
import configSchema from './entities/Config.json' with { type: 'json' };
import configTypeSchema from './entities/ConfigType.json' with { type: 'json' };
import procedureSchema from './entities/Procedure.json' with { type: 'json' };
import procedureTypeSchema from './entities/ProcedureType.json' with { type: 'json' };
import ruleSchema from './entities/Rule.json' with { type: 'json' };
import thingSchema from './entities/Thing.json' with { type: 'json' };
import thingTypeSchema from './entities/ThingType.json' with { type: 'json' };
import hasChannelSchema from './associations/HasChannel.json' with { type: 'json' };
import hasAssetSchema from './associations/HasAsset.json' with { type: 'json' };
import hasConfigSchema from './associations/HasConfig.json' with { type: 'json' };
import hasProcedureSchema from './associations/HasProcedure.json' with { type: 'json' };
import hasThingSchema from './associations/HasThing.json' with { type: 'json' };
import forAssetSchema from './associations/ForAsset.json' with { type: 'json' };
import hasTypeSchema from './associations/HasType.json' with { type: 'json' };
import { toConnections } from './connections.js';

export const datamodelVersion = '9.1';

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

/** Every allowed connection: `from` entity, through `association`, `to` entity, held in `property`. */
export const connections = toConnections(entitySchemas);
