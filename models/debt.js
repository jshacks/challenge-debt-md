const mongoose = require('mongoose');
const db = require('../db.js');
const Creditor = require('./creditor.js');
const Async = require('async');

var debtSchema = mongoose.Schema({
    creditor: {type: mongoose.Schema.Types.ObjectId, ref: 'Creditor', required: true},
    date: { type: Date, default: Date.now },
    sold: Number,
    currency: String
});

var Debt = mongoose.model('Debt', debtSchema);
var debt = {};


    /*Creditor.creditorModel.findOne({name:"UniCredit Bank Austria"},function(err,creditor){
        console.log(creditor)
        var debtSample = new Debt({
            creditor: creditor,
            type: 'bilateral',
            date: new Date('31 July 2016'),
            sold: '21055319',
            currency: 'USD'
        });
        debtSample.save((err,saved) => {
            console.log(err,saved)
        })
    })*/


debt.getTotal = function(callback){
    /*var total = 0;
    Creditor.getAll(function(creditors){
        Async.map(creditors, (creditor, clbk) => {
            debt.getTotalPerCreditor(creditor._id,function(err, debt){
                total = total + debt;
                console.log(debt)
                clbk(null, total);
            });
        }, (err, results) => {
            results.forEach(function(creditor_last,index){
                total += creditor_last.sold
            });
            callback(total)
        })
    });*/
    Debt.aggregate(
       [
         
         { $sort: { creditor: 1, date: 1, sold: 1 } },
         {
           $group:
             {
               _id: "$creditor",
               sold: { $last: "$sold" }
             }
         }, 
         {
            $group: { 
                _id: 1,
                total: { $sum: '$sold' } 
            }
         }
       ]
    ).exec(function(err,result){
        callback(result[0].total)
    });
}

debt.getTotalCreditor = function(creditor_id,callback){
    Debt.findOne({'creditor':creditor_id}).sort('-date').populate('creditor').exec(callback);
}

debt.getTotalPerCreditor = function(callback){
    var date = false,
        result = []
    Debt.find({}).sort('-date').populate('creditor').exec(function(err,debts){
        debts.forEach(function(debt,index){
            if(!date)
                date = debt.date
            if(date.getTime() === debt.date.getTime()){
                result.push(debt);
            }
        });
        callback(result)
    });
}

debt.getAll = function(callback){
    Debt.find({}).populate('creditor').exec(callback);
}

module.exports = debt;