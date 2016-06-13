'use strict';

var isLetter = require('../../../index');

describe('error handling', function () {
    it('should return false when passed non-string value', function () {
        expect(isLetter(null)).toEqual(false);
        expect(isLetter(undefined)).toEqual(false);
        expect(isLetter(NaN)).toEqual(false);
        expect(isLetter(123)).toEqual(false);
    });
});

describe('good work', function () {
    it('should return true on single strings', function () {
        expect(isLetter('a')).toEqual(true);
        expect(isLetter('Z')).toEqual(true);
        expect(isLetter('h')).toEqual(true);
    });

    it('should return false on words', function () {
        expect(isLetter('dog')).toEqual(false);
        expect(isLetter('small')).toEqual(false);
        expect(isLetter('kitten')).toEqual(false);
    })
});
