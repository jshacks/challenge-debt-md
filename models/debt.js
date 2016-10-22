const mongoose = require('mongoose');
const db = require('../db.js');
const creditor = require('./creditor.js');

var debtSchema = mongoose.Schema({
    creditor_id: Number,
    date: { type: Date, default: Date.now },
    sold: Number,
    currency: String
});

var debtModel = mongoose.model('Debt', debtSchema);
var debt = {};

//db.once('open', function() {
    /*var debtSample = new debtModel({
        creditor_id: 1,
        type: 'bilateral',
        date: new Date('31 July 2016'),
        sold: '73096315.71',
        currency: 'USD'
    });
    debtSample.save((err,saved) => {
        console.log(err,saved)
    })*/
//});

debt.getTotal = function(){
    return 145490024077;
}

debt.getTotalPerCreditor = function(creditor,callback){
    debtModel.find({'creditor':creditor},(err,result) => {
        callback(result)
    });
}

debt.getAll = function(callback){
    debtModel.find({},(err,result) => {
        callback(result)
    });
}

module.exports = debt;