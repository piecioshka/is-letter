"use strict";

var isLetter = require("./index");

describe("error handling", function () {
    it("should return false when passed non-string value", function () {
        expect(isLetter(null)).toEqual(false);
        expect(isLetter(undefined)).toEqual(false);
        expect(isLetter(NaN)).toEqual(false);
        expect(isLetter(123)).toEqual(false);
        expect(isLetter(5)).toEqual(false);
    });

    it("should return false when passed non-letter unicode value", function () {
        expect(isLetter("💩")).toEqual(false);
    });
});

describe("happy path", function () {
    it("should return true on single strings", function () {
        expect(isLetter("a")).toEqual(true);
        expect(isLetter("Z")).toEqual(true);
        expect(isLetter("h")).toEqual(true);
        expect(isLetter("ź")).toEqual(true);
        expect(isLetter("ü")).toEqual(true);
        expect(isLetter("ß")).toEqual(true);
        expect(isLetter("ą")).toEqual(true);
    });

    it("should return false on words", function () {
        expect(isLetter("dog")).toEqual(false);
        expect(isLetter("small")).toEqual(false);
        expect(isLetter("kitten")).toEqual(false);
    });
});
