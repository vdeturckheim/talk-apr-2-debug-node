'use strict';
const app = require('express')();
const Uuid = require('uuid/v4');

const PORT = process.env.PORT || 8080;

const STORE = new Set();
const getObject = function (req) {

    const item = { req, uuid: Uuid() };
    STORE.add(item);
    return item;
};

app.use((req, res) => {

    const { uuid } = getObject(req);
    console.log(req.method, req.url, uuid);
    res.end('ok');
});

app.listen(PORT, () => {

    console.log(`App listening on port ${PORT}`);
});
