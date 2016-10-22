const routes = require('express').Router();
const debtModel = require('../models/debt');
const creditorModel = require('../models/creditor');

routes.get('/debt/total', (req, res) => {
	var result = model.getTotal();
	res.json(result)
});

routes.get('/debt/all', (req, res) => {
	debtModel.getAll(function(err, result){
		res.json(result);
	});
});

routes.get('/debt/creditor/:creditor', (req, res) => {	
	debtModel.getTotalPerCreditor(req.params.creditor,function(result){
		res.json(result);
	});
});

module.exports = routes;