const express = require('express');
const router_basic = require('./router_basic');
const app = express();

app.listen(8080);

app.use(router_basic)

//lets require/import the mongodb native drivers.
const mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
const url = 'mongodb://localhost:27017/debt-md';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});

app.get('/', (req, res) => {
  res.send('{"debt":1312312,"curency":"USD"}');
});