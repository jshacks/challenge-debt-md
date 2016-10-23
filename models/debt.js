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
debt.debtModel = Debt

debt.new = function(sold, date, callback){
    console.log(sold)
    Creditor.getCreditor_by_name(sold.name, function (obj) {

        if (obj == null) { 
            Creditor.new(sold, function(obj){
                var newModel = new Debt ( {
                    "creditor": obj,
                    "type": sold.type,
                    "date": date,
                    "sold": sold.value,
                    "currency": 'USD'
                })
                newModel.save(function(error, object){
                    callback(object)
                })
            })

        } else {
            var newModel = new Debt ( {
                "creditor": obj,
                "type": sold.type,
                "date": date,
                "sold": sold.value,
                "currency": 'USD'
            })
            newModel.save(function(error, object){
                callback(object)
            })
        }
    })
}
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

debt.getTotalPerCreditor = function(creditor_id,callback){
    Debt.findOne({'creditor':creditor_id}).sort('-date').populate('creditor').exec(callback);
}

debt.getAll = function(callback){
    Debt.find({}).populate('creditor').exec(callback);
}

module.exports = debt;