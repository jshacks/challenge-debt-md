const routes = require('express').Router();
const Debt = require('../models/debt');
const Creditor = require('../models/creditor');

routes.get('/debt/total', (req, res) => {
	Debt.getTotal(function(total){
		res.json(total);
	});
});

routes.get('/debt/all', (req, res) => {
	Debt.getAll(function(err, result){
		res.json(result);
	});
});

routes.get('/debt/creditor/:creditor', (req, res) => {	
	Debt.getTotalPerCreditor(req.params.creditor,function(err,result){
		res.json(result);
	});
});

module.exports = routes;