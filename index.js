const express = require('express');
const app = express();
const router_basic = require('./routes/router_basic');
const cors = require('cors')

app.use(cors());
app.listen(8080);
app.use("/api/v1/", router_basic);