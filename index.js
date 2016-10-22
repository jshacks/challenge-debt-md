const express = require('express');
const router_basic = require('./router_basic');
const app = express();

app.listen(8080);

app.use("/api/v1/", router_basic)

const mongodb = require('mongodb');
const mongoose = require('mongoose');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
const url = 'mongodb://localhost:27017/debt-md';

mongoose.connect('mongodb://localhost:27017/debt-m');

const db = mongoose.connection;
var debtSchema = mongoose.Schema({
    creditor: String,
    type: String,
    date: { type: Date, default: Date.now },
    sold: Number,

});

var Debt = mongoose.model('Debt', debtSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected')
    var debtSample = new Debt({
        creditor: 'Agentia Japoneza de Cooperare Internationala ',
        type: 'bilateral',
        date: new Date('31 July 2016'),
        sold: '53918737.9264754',

    });
    /*debtSample.save((err,saved) => {
        console.log(err,saved)
    })*/
});

app.get('/', (req, res) => {
    Debt.find({'type':'bilateral'},(err,result) => {
        console.log(err,result)
        //res.send('{"debt":1312312,"curency":"USD"}');
        res.json(result)
    })
});