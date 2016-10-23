const mongoose = require('mongoose');
const db = require('../db.js');

var creditorSchema = mongoose.Schema({
    name: {type: String, unique: true}
});

var creditor = {};
var Creditor = mongoose.model('Creditor', creditorSchema);
creditor.creditorModel = Creditor

creditor.new = function(sold, callback){
    var newModel = new Creditor ( {
        "name": sold.name
    })
    newModel.save(function (error, creditor){
        callback(creditor)
    })
}

creditor.getTotal = function(){
    
}

creditor.getCreditor_by_id = function(creditor_id,callback){
    Creditor.findOne({'id':creditor_id},(err,result) => {
        if (callback !== undefined) { callback(result); }
    });
}

creditor.getCreditor_by_name = function(creditor_name,callback){
    Creditor.findOne({'name':creditor_name},(err,result) => {
        if (err === null) {
            callback(result); 
        } else {
            console.log(err)
        }
    });
}

creditor.getCreditorID = function(creditor_name,callback){
    Creditor.findOne({'name': creditor_name},(err,result) => {
        if (callback !== undefined) { callback(result); }
    });
}

creditor.getAll = function(callback){
    Creditor.find({},(err,creditors) => {
        if (callback !== undefined) { callback(creditors); }
    });
}

creditor.getCount = function(callback){
    Creditor.count({},(err, count) => {
        if (callback !== undefined) { callback(count); }
    });
}

module.exports = creditor;