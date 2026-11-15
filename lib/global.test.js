"use strict";

const assert = require("@sinonjs/referee-sinon").assert;
const globalObject = require("./global");

describe("global", function () {
    before(function () {
        if (typeof global === "undefined") {
            this.skip();
        }
    });

    it("is same as global", function () {
        assert.same(globalObject, globalThis);
    });
});
