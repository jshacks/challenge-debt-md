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


    /*Creditor.creditorModel.findOne({name:"Agentia Japoneza de Cooperare Internationala"},function(err,creditor){
        console.log(creditor)
        var debtSample = new Debt({
            creditor: creditor,
            type: 'bilateral',
            date: new Date('31 June 2016'),
            sold: '33096315.71',
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
            $project: { total: { $sum: '$sold' } }
         }
       ]
    ).exec(function(err,resultArr){
        console.log(err,resultArr)
        return callback('no result')
        if (resultArr.length === 1)
            return callback(resultArr[0].sold)
        total = resultArr.reduce(function(a,b){
            return a.sold + b.sold;
        });
        callback(total)
    });
}

debt.getTotalPerCreditor = function(creditor_id,callback){
    Debt.findOne({'creditor':creditor_id}).sort('-date').populate('creditor').exec(callback);
}

debt.getAll = function(callback){
    Debt.find({}).populate('creditor').exec(callback);
}

module.exports = debt;