"use strict";

var refute = require("@sinonjs/referee-sinon").refute;
var copyPrototypeMethods = require("./copy-prototype-methods.cjs");

describe("copyPrototypeMethods", function () {
    it("does not throw for Map", function () {
        refute.exception(function () {
            copyPrototypeMethods(Map.prototype);
        });
    });
});
