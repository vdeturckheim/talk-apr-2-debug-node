'use strict';

const MAX = 10;
const worker = function (ct, cb) {
    ++ct;
    if (ct >= MAX) {
        return cb();
    }
    return setTimeout(() => {
        worker(ct, cb);
    }, 10);
};

module.exports = function (req, res) {
    worker(0, () => {
        res.end('ok\n');
    });
};
