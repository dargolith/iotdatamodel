import test from 'blue-tape';
import confDatamodel from '../../src/configuration';
import { Asset } from '../../src/configuration/Asset';
import { AssetType } from '../../src/configuration/AssetType';
import { Channel } from '../../src/configuration/Channel';
import { ChannelType } from '../../src/configuration/ChannelType';
import { Configuration } from '../../src/configuration/Configuration';
import { HasChannel } from '../../src/configuration/HasChannel';
import { HasChild } from '../../src/configuration/HasChild';
import { HasConfiguration } from '../../src/configuration/HasConfiguration';
import { HasProcedure } from '../../src/configuration/HasProcedure';
import { HasRole } from '../../src/configuration/HasRole';
import { HasType } from '../../src/configuration/HasType';
import { Identity } from '../../src/configuration/Identity';
import { Procedure } from '../../src/configuration/Procedure';
import { Role } from '../../src/configuration/Role';
import { Rule } from '../../src/configuration/Rule';
import { Thing } from '../../src/configuration/Thing';
import { ThingType } from '../../src/configuration/ThingType';
import { User } from '../../src/configuration/User';
/* eslint-disable no-console */

export default function runTests() {
  test('Implicitly imported entity (vertex) schemas exist', async t => {
    Object.keys(confDatamodel.Vertices).forEach(entity => {
      console.log(`Verifying implicit schema ${entity}...`);
      t.ok(JSON.stringify(confDatamodel[entity].describe()));
      t.equal(confDatamodel[entity].describe().meta[0].name, entity);
    });
  });

  test('Implicitly imported connection (edge) schemas exist', async t => {
    Object.keys(confDatamodel.Edges).forEach(connection => {
      console.log(`Verifying implicit schema ${connection}...`);
      t.ok(JSON.stringify(confDatamodel[connection].describe()));
      t.equal(confDatamodel[connection].describe().meta[0].name, connection);
    });
  });

  test('Explicitly imported schemas exist', async t => {
    console.log('Verifying explicit schema Asset...');
    t.ok(JSON.stringify(Asset.describe()));
    t.equal(Asset.describe().meta[0].name, 'Asset');

    console.log('Verifying explicit schema AssetType...');
    t.ok(JSON.stringify(AssetType.describe()));
    t.equal(AssetType.describe().meta[0].name, 'AssetType');

    console.log('Verifying explicit schema Channel...');
    t.ok(JSON.stringify(Channel.describe()));
    t.equal(Channel.describe().meta[0].name, 'Channel');

    console.log('Verifying explicit schema ChannelType...');
    t.ok(JSON.stringify(ChannelType.describe()));
    t.equal(ChannelType.describe().meta[0].name, 'ChannelType');

    console.log('Verifying explicit schema Configuration...');
    t.ok(JSON.stringify(Configuration.describe()));
    t.equal(Configuration.describe().meta[0].name, 'Configuration');

    console.log('Verifying explicit schema HasChannel...');
    t.ok(JSON.stringify(HasChannel.describe()));
    t.equal(HasChannel.describe().meta[0].name, 'HasChannel');

    console.log('Verifying explicit schema HasChild...');
    t.ok(JSON.stringify(HasChild.describe()));
    t.equal(HasChild.describe().meta[0].name, 'HasChild');

    console.log('Verifying explicit schema HasConfiguration...');
    t.ok(JSON.stringify(HasConfiguration.describe()));
    t.equal(HasConfiguration.describe().meta[0].name, 'HasConfiguration');

    console.log('Verifying explicit schema HasProcedure...');
    t.ok(JSON.stringify(HasProcedure.describe()));
    t.equal(HasProcedure.describe().meta[0].name, 'HasProcedure');

    console.log('Verifying explicit schema HasRole...');
    t.ok(JSON.stringify(HasRole.describe()));
    t.equal(HasRole.describe().meta[0].name, 'HasRole');

    console.log('Verifying explicit schema HasType...');
    t.ok(JSON.stringify(HasType.describe()));
    t.equal(HasType.describe().meta[0].name, 'HasType');

    console.log('Verifying explicit schema Identity...');
    t.ok(JSON.stringify(Identity.describe()));
    t.equal(Identity.describe().meta[0].name, 'Identity');

    console.log('Verifying explicit schema Procedure...');
    t.ok(JSON.stringify(Procedure.describe()));
    t.equal(Procedure.describe().meta[0].name, 'Procedure');

    console.log('Verifying explicit schema Role...');
    t.ok(JSON.stringify(Role.describe()));
    t.equal(Role.describe().meta[0].name, 'Role');

    console.log('Verifying explicit schema Rule...');
    t.ok(JSON.stringify(Rule.describe()));
    t.equal(Rule.describe().meta[0].name, 'Rule');

    console.log('Verifying explicit schema Thing...');
    t.ok(JSON.stringify(Thing.describe()));
    t.equal(Thing.describe().meta[0].name, 'Thing');

    console.log('Verifying explicit schema ThingType...');
    t.ok(JSON.stringify(ThingType.describe()));
    t.equal(ThingType.describe().meta[0].name, 'ThingType');

    console.log('Verifying explicit schema User...');
    t.ok(JSON.stringify(User.describe()));
    t.equal(User.describe().meta[0].name, 'User');
  });
}

if (require.main === module) runTests();
