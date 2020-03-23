'use strict';
const app = require('express')();
const Uuid = require('uuid/v4');

const PORT = process.env.PORT || 8080;

const STORE = new Set();
const Item = class {

    constructor(req) {

        this.req = req;
        this.uuid = Uuid();
        STORE.add(this);
    }

};

app.use((req, res) => {

    const { uuid } = new Item(req);
    console.log(req.method, req.url, uuid);
    res.end('ok');
});

app.listen(PORT, () => {

    console.log(`App listening on port ${PORT}`);
});
