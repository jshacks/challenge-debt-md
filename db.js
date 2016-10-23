const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/debt-md');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.export = db;