module.exports = function () {


  const app = this; // eslint-disable-line no-unused-vars
  app.configure(parkeerplaatsen);
};

const parkeerplaatsen = require('./parkeerplaatsen/parkeerplaatsen.service.js');
