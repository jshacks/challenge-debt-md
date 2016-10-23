const routes = require('express').Router();
const Debt = require('../models/debt');
const Creditor = require('../models/creditor');

routes.get('/debt/total', (req, res) => {
	Debt.getTotal(function(total){
		res.json({"total":total,"population":3553056});
	});
});

routes.get('/debt/total_per_month', (req, res) => {
	Debt.getTotalMonths(function(months){
		res.json(months);
	});
});

routes.get('/debt/all', (req, res) => {
	Debt.getAll(function(err, result){
		res.json(result);
	});
});

routes.get('/debt/creditor/:creditor', (req, res) => {	
	Debt.getTotalCreditor(req.params.creditor,function(err,result){
		res.json(result);
	});
});

routes.get('/debt/creditor/', (req, res) => {
	Debt.getTotalPerCreditor(function(result){
		res.json(result);
	});
});

module.exports = routes;