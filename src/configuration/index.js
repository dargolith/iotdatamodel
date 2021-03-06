import { Asset } from './Asset';
import { AssetType } from './AssetType';
import { Channel } from './Channel';
import { ChannelType } from './ChannelType';
import { Configuration } from './Configuration';
import { HasChannel } from './HasChannel';
import { HasChild } from './HasChild';
import { HasConfiguration } from './HasConfiguration';
import { HasProcedure } from './HasProcedure';
import { HasRole } from './HasRole';
import { HasRule } from './HasRule';
import { HasType } from './HasType';
import { Identity } from './Identity';
import { Procedure } from './Procedure';
import { Role } from './Role';
import { Rule } from './Rule';
import { Thing } from './Thing';
import { ThingType } from './ThingType';
import { User } from './User';

export const Vertices = {
  Asset,
  AssetType,
  Channel,
  ChannelType,
  Configuration,
  Identity,
  Procedure,
  Role,
  Rule,
  Thing,
  ThingType,
  User,
};

export const Edges = {
  HasChannel,
  HasChild,
  HasConfiguration,
  HasProcedure,
  HasRole,
  HasRule,
  HasType,
};

const datamodel = {
  ...Vertices,
  ...Edges,
};

export const formatVersion = '3.0';

// eslint-disable-next-line import/no-default-export
export default datamodel;
