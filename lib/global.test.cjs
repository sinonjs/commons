"use strict";

var assert = require("@sinonjs/referee-sinon").assert;
var globalObject = require("./global.cjs");

describe("global", function () {
    before(function () {
        if (typeof global === "undefined") {
            this.skip();
        }
    });

    it("is same as global", function () {
        assert.same(globalObject, global);
    });
});
