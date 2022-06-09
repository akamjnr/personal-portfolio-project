const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Anyway Kambeva Jnr');
});

module.exports = routes;