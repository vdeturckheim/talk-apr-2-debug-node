'use strict';
const Uuid = require('uuid/v4');

const STORE = new Set();
const getObject = function (req) {

    const item = { req, uuid: Uuid() };
    STORE.add(item);
    return item;
};

module.exports = function (req, res) {

    const { uuid } = getObject(req);
    console.log(req.method, req.url, uuid);
    res.end('ok\n');
};


