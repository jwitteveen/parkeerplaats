const assert = require('assert');
const app = require('../../src/app');

describe('\'parkeerplaatsen\' service', () => {
  it('registered the service', () => {
    const service = app.service('parkeerplaatsen');

    assert.ok(service, 'Registered the service');
  });
});
