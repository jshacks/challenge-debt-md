const mongoose = require('mongoose');
const db = require('../db.js');

var creditorSchema = mongoose.Schema({
	id: Number,
    name: String
});

var creditor = {};

creditor.creditorModel = mongoose.model('Creditor', creditorSchema);

creditor.new = function(sold, id){
    var newModel = creditorModel ( {
        "id": id,
        "name": sold.name
    })
    newModel.save()
}

creditor.getTotal = function(){
    
}

creditor.getCreditor = function(creditor_id,callback){
    creditorModel.find({'id':creditor_id},(err,result) => {
        callback(result);
    });
}

creditor.getCreditorID = function(creditor_name,callback){
    creditorModel.find({'name': creditor_name},(err,result) => {
        callback(result);
    });
}

creditor.getAll = function(callback){
    creditorModel.find({},(err,result) => {
        callback(result);
    });
}

module.exports = creditor;