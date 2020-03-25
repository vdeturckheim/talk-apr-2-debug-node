'use strict';

const REGEX = /([a-z]+)+$/;

/**
 *
 * @param {string} str
 * @return {boolean}
 */
function validateInput (str) {

    return REGEX.test(str);
}

module.exports = function (req, res) {

    const str = req.params.str;
    console.log(`testing string "${str}"`);
    res.end(`${validateInput(str)}`);
};
