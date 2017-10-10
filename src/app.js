const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const changesRoutes = require('./routes/changes');
app.use('/api/tou/changes', changesRoutes);

app.listen(port);
console.log('Time-of-use API for Advanced Microgrid started on: ' + port);

module.exports = app;

 // http://localhost:8080/api/tou/changes?startTime={start}&endTime={end}


