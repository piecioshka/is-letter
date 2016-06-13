'use strict';

/**
 * @param {string} source
 * @returns {boolean}
 */
function isString(source) {
    return typeof source === 'string';
}

/**
 * @param {string} source
 * @returns {boolean}
 */
function isLetter(source) {
    return isString(source) && (/^[a-zA-Z]$/).test(source);
}

// UMD Export.

if (typeof module === 'object' && module.exports) {
    module.exports = isLetter;
} else if (typeof define === 'function' && define.amd) {
    define([], isLetter);
} else {
    window.isLetter = isLetter;
}
