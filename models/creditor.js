const mongoose = require('mongoose');
const db = require('../db.js');

var creditorSchema = mongoose.Schema({
	id: Number,
    name: String
});

var creditor = {};

creditor.creditorModel = mongoose.model('Creditor', creditorSchema);

var creditorSample = new creditor.creditorModel({
    id: 1,
    name: 'Agentia Japoneza de Cooperare Internationala',
});
creditorSample.save((err,saved) => {
    console.log(err,saved)
})

creditor.getTotal = function(){
    
}

creditor.getCreditor = function(creditor_id,callback){
    creditorModel.find({'id':creditor_id},(err,result) => {
        callback(result);
    });
}

creditor.getAll = function(callback){
    creditorModel.find({},(err,result) => {
        callback(result);
    });
}

module.exports = creditor;