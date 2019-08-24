/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 * var isLetter = require('is-letter');
 * isLetter('a'); // => true
 * isLetter('abba'); // => false
 */

'use strict';

/**
 * Verify, that passed argument is a string.
 *
 * @param {string} source
 * @returns {boolean}
 */
function isString(source) {
    return typeof source === 'string';
}

/**
 * Verify, that passed argument is a single letter.
 *
 * @param {string} source
 * @returns {boolean}
 */
function isLetter(source) {
    return isString(source) && (/^[a-zA-Z]$/).test(source);
}

module.exports = isLetter;
