"use strict";

const assert = require("@sinonjs/referee-sinon").assert;
const valueToString = require("./value-to-string");

describe("util/core/valueToString", function () {
    it("returns string representation of an object", function () {
        const obj = {};

        assert.equals(valueToString(obj), obj.toString());
    });

    it("returns 'null' for literal null'", function () {
        assert.equals(valueToString(null), "null");
    });

    it("returns 'undefined' for literal undefined", function () {
        assert.equals(valueToString(undefined), "undefined");
    });
});
