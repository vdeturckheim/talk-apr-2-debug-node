'use strict';
const Uuid = require('uuid/v4');

const STORE = new Set();
const Item = class {

    constructor(req) {

        this.req = req;
        this.uuid = Uuid();
        STORE.add(this);
    }
};

module.exports = function (req, res) {

    const { uuid } = new Item(req);
    console.log(req.method, req.url, uuid);
    res.end('ok\n');
};


