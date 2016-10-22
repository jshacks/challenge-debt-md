const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Connected!' });
});

module.exports = routes;