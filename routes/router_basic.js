const routes = require('express').Router();

routes.get('/debt/total', (req, res) => {
	res.json({ value: 1300000.50 });
	res.end()
});

routes.get('/debt/:creditor', (req, res) => {
	var creditor = req.params.creditor
	
	res.json({"creditor": creditor , value: 99.50 });
	
	res.end()
});

module.exports = routes;