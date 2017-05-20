// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const axios = require('axios');
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    console.log(hook.params);

    let result = hook.params.query.place;
    console.log(result);

    let config = {
      headers: {'X-App-Token': 'qKQ6NHLlfk8AZY40bpmbza6Kq'}
    };

    // maak verbinding rdw
    axios.get('https://opendata.rdw.nl/resource/r7mi-cxck.json?place='.concat(result), config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return Promise.resolve(hook);
  };
};
