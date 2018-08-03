"use strict";

var assert = require("@sinonjs/referee").assert;
var index = require("./index");

describe("package", function() {
    var expectedExports = ["functionName", "prototypes", "valueToString"];
    Object.keys(index).forEach(function(name) {
        assert.isTrue(expectedExports.includes(name));
    });
});
