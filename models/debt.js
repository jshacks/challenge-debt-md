const mongoose = require('mongoose');
const db = require('../db.js');
const Creditor = require('./creditor.js');

var debtSchema = mongoose.Schema({
    creditor: {type: mongoose.Schema.Types.ObjectId, ref: 'Creditor', required: true},
    date: { type: Date, default: Date.now },
    sold: Number,
    currency: String
});

var debtModel = mongoose.model('Debt', debtSchema);
var debt = {};


    /*Creditor.creditorModel.findOne({},function(err,creditor){
        console.log(creditor)
        var debtSample = new debtModel({
            creditor: creditor,
            type: 'bilateral',
            date: new Date('31 July 2016'),
            sold: '73096315.71',
            currency: 'USD'
        });
        debtSample.save((err,saved) => {
            console.log(err,saved)
        })
        
    })*/


debt.getTotal = function(){
    return 145490024077;
}

debt.getTotalPerCreditor = function(creditor,callback){
    debtModel.find({'creditor':creditor},(err,debts) => {
        callback(debts)
    });
}

debt.getAll = function(callback){
    debtModel.find({}).populate('creditor').exec(callback);
}

module.exports = debt;