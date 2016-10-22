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

creditor.getTotal = function(){
    
}

creditor.getCreditor = function(creditor_id,callback){
    creditor.creditorModel.find({'id':creditor_id},(err,result) => {
        callback(result);
    });
}

creditor.getAll = function(callback){
    creditor.creditorModel.find({},(err,creditors) => {
        callback(creditors);
    });
}

module.exports = creditor;