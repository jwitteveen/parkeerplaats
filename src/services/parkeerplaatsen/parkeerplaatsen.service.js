// Initializes the `parkeerplaatsen` service on path `/parkeerplaatsen`
const createService = require('feathers-nedb');
const createModel = require('../../models/parkeerplaatsen.model');
const hooks = require('./parkeerplaatsen.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'parkeerplaatsen',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/parkeerplaatsen', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('parkeerplaatsen');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

const filters = require('./parkeerplaatsen.filters');
