'use strict';
const app = require('express')();

app.get('/mem/literal', require('./lib/memleak-literal'));
app.get('/mem/class', require('./lib/memleak-class'));
app.get('/cpu/:str', require('./lib/redos'));
app.get('/async', require('./lib/async'));

app.get('/', (req, res) => {

    res.end('ok\n');
});

module.exports = app;
