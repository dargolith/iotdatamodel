import assetSchema from './src/entities/Asset.json' assert { type: 'json' };
import assetTypeSchema from './src/entities/AssetType.json' assert { type: 'json' };
import channelSchema from './src/entities/Channel.json' assert { type: 'json' };
import channelTypeSchema from './src/entities/ChannelType.json' assert { type: 'json' };
import configSchema from './src/entities/Config.json' assert { type: 'json' };
import configTypeSchema from './src/entities/ConfigType.json' assert { type: 'json' };
import procedureSchema from './src/entities/Procedure.json' assert { type: 'json' };
import procedureTypeSchema from './src/entities/ProcedureType.json' assert { type: 'json' };
import ruleSchema from './src/entities/Rule.json' assert { type: 'json' };
import thingSchema from './src/entities/Thing.json' assert { type: 'json' };
import thingTypeSchema from './src/entities/ThingType.json' assert { type: 'json' };
import triggerSchema from './src/entities/Trigger.json' assert { type: 'json' };
import hasChannelSchema from './src/associations/HasChannel.json' assert { type: 'json' };
import hasChildSchema from './src/associations/HasChild.json' assert { type: 'json' };
import hasConfigSchema from './src/associations/HasConfig.json' assert { type: 'json' };
import hasProcedureSchema from './src/associations/HasProcedure.json' assert { type: 'json' };
import hasTriggerSchema from './src/associations/HasTrigger.json' assert { type: 'json' };
import hasTypeSchema from './src/associations/HasType.json' assert { type: 'json' };

export const datamodelVersion = '0.1';

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
  hasChildSchema,
  hasConfigSchema,
  hasProcedureSchema,
  hasTriggerSchema,
  hasTypeSchema,
];

export const schemas = [...entitySchemas, ...associationSchemas];
