"use strict";

var assert = require("@sinonjs/referee").assert;
var index = require("./index");

describe("package", function() {
    var expectedExports = ["functionName", "valueToString"];

    expectedExports.forEach(function(name) {
        it("should export a function named '" + name + "'", function() {
            var f = index[name];

            assert.isFunction(f);
            assert.equals(f.name, name);
        });
    });

    Object.keys(index).forEach(function(name) {
        assert.isTrue(expectedExports.includes(name));
    });
});
