const routes = require('express').Router();

routes.get('/api/v1/debt/total', (req, res) => {
  res.json({ value: 1300000.50 });
});

module.exports = routes;