const express = require('express');
const app = express();
const router_basic = require('./routes/router_basic');

app.listen(8080);
app.use("/api/v1/", router_basic);