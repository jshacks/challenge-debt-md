const routes = require('express').Router();

routes.get('/api/v1/debt/total', (req, res) => {
  res.json({ value: 1300000.50 });
});

routes.get('/debt/:creditor', (req, res) => {
  var creditor = req.params.creditor
  res.json({ "creditor": creditor });
});

module.exports = routes;