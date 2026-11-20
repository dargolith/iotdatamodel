import { describe, expect, it } from 'vitest';

import { toConnections } from '../src/connections.js';

const thingSchema = {
  title: 'Thing',
  properties: {
    id: { type: 'string' },
    type: { type: ['string', 'null'], link: 'ThingType', via: 'HasType' },
    channels: { type: 'object', link: 'Channel', via: 'HasChannel' },
  },
};
const thingTypeSchema = { title: 'ThingType', properties: { id: { type: 'string' } } };

describe('toConnections', () => {
  it('gives no connections for no schemas', () => {
    expect(toConnections([])).toEqual([]);
  });

  it('gives no connections for a schema without linking properties', () => {
    expect(toConnections([thingTypeSchema])).toEqual([]);
  });

  it('gives one connection per linking property, in property order', () => {
    expect(toConnections([thingSchema])).toEqual([
      { association: 'HasType', from: 'Thing', to: 'ThingType', property: 'type' },
      { association: 'HasChannel', from: 'Thing', to: 'Channel', property: 'channels' },
    ]);
  });

  it('keeps schema order across several schemas', () => {
    const channelSchema = {
      title: 'Channel',
      properties: { type: { link: 'ChannelType', via: 'HasType' } },
    };

    expect(toConnections([thingTypeSchema, channelSchema, thingSchema]).map(({ from }) => from)).toEqual([
      'Channel',
      'Thing',
      'Thing',
    ]);
  });

  it('skips a property that links without naming an association', () => {
    const schema = { title: 'Thing', properties: { type: { link: 'ThingType' } } };

    expect(toConnections([schema])).toEqual([]);
  });
});
