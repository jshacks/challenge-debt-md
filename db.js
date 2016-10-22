const mongoose = require('mongoose');
// Connection URL. This is where your mongodb server is running.
const url = 'mongodb://localhost:27017/debt-md';

mongoose.connect('mongodb://localhost:27017/debt-m');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.export = db;