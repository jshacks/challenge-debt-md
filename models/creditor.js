const mongoose = require('mongoose');
const db = require('../db.js');

var creditorSchema = mongoose.Schema({
    name: {type: String, unique: true}
});

var creditor = {};

creditor.creditorModel = mongoose.model('Creditor', creditorSchema);

/*var creditorSample = new creditor.creditorModel({
    name: 'UniCredit Bank Austria'
});
creditorSample.save((err,saved) => {
    console.log(err,saved)
})*/
creditor.new = function(sold, id){
    console.log(sold.name)
    var newModel = creditor.creditorModel ( {
        "name": sold.name
    })
    newModel.save()
}

creditor.getTotal = function(){
    
}

creditor.getCreditor = function(creditor_id,callback){
    creditor.creditorModel.findOne({'id':creditor_id},(err,result) => {
        if (callback !== undefined) { callback(result); }
    });
}

creditor.getCreditorID = function(creditor_name,callback){
    creditor.creditorModel.findOne({'name': creditor_name},(err,result) => {
        if (callback !== undefined) { callback(result); }
    });
}

creditor.getAll = function(callback){
    creditor.creditorModel.find({},(err,creditors) => {
        if (callback !== undefined) { callback(creditors); }
    });
}

creditor.getCount = function(callback){
    creditor.creditorModel.count({},(err, count) => {
        if (callback !== undefined) { callback(count); }
    });
}

module.exports = creditor;