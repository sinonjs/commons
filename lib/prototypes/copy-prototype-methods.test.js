"use strict";

const refute = require("@sinonjs/referee-sinon").refute;
const copyPrototypeMethods = require("./copy-prototype-methods");

describe("copyPrototypeMethods", function () {
    it("does not throw for Map", function () {
        refute.exception(() => {
            copyPrototypeMethods(Map.prototype);
        });
    });
});
