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
            });
        }
    })
}


debt.getTotal = function(callback){
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
        var total = result && result[0] ? result[0].total : 0;
        callback(total)
    });
}

debt.getTotalCreditor = function(creditor_id,callback){
    Debt.findOne({'creditor':creditor_id}).sort('-date').populate('creditor').exec(callback);
}

debt.getTotalPerCreditor = function(callback){
    var date = false,
    result = []
    Debt.find({}).sort({'date':-1,'sold':-1}).populate('creditor').exec(function(err,debts){
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

debt.getTotalMonths = function(callback){
    var date = false,
    result = {}

    Debt.find({}).sort('-date').populate('creditor').exec(function(err,debts){
        debts.forEach(function(debt,index){
            date = debt.date
            if(!result[date])
                result[date] = 0;
            result[date] += parseFloat(debt.sold);
        });
        var result_array = []
        for (var key in result) {
            if (result.hasOwnProperty(key)) { 
                var tempObj = {"date": key,"value": result[key] } 
                result_array.push(tempObj)
            }
        }
        callback(result_array)
    });
}

debt.getIncrement = function(callback){
    this.getTotalMonths(function(montsTotals){
        if(!montsTotals)
            increment = 0;
        else
            var increment = ( parseInt(montsTotals[0].value) - parseInt(montsTotals[montsTotals.length - 1].value) ) / ( 60 * 60 * 24 * 30);
        
        callback(increment);
    });
}

debt.getAll = function(callback){
    Debt.find({}).populate('creditor').exec(callback);
}

module.exports = debt;