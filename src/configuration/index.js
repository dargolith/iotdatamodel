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
import { HasType } from './HasType';
import { Identity } from './Identity';
import { Procedure } from './Procedure';
import { Role } from './Role';
import { Rule } from './Rule';
import { Thing } from './Thing';
import { ThingType } from './ThingType';
import { User } from './User';

const Vertices = {
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

const Edges = {
  HasChannel,
  HasChild,
  HasConfiguration,
  HasProcedure,
  HasRole,
  HasType,
};

const datamodel = {
  ...Vertices,
  ...Edges,
  Vertices,
  Edges,
};

export default datamodel;
