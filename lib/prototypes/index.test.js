"use strict";

var assert = require("@sinonjs/referee").assert;

var arrayProto = require("./index").array;
var functionProto = require("./index").function;
var objectProto = require("./index").object;

describe("prototypes", function() {
    describe(".array", function() {
        verifyProperties(arrayProto, Array);
    });
    describe(".function", function() {
        verifyProperties(functionProto, Function);
    });
    describe(".object", function() {
        verifyProperties(objectProto, Object);
    });
});

function verifyProperties(p, origin) {
    it("should have all the methods of the origin prototype", function() {
        var methodNames = Object.getOwnPropertyNames(origin.prototype).filter(
            function(name) {
                return (
                    name !== "size" &&
                    name !== "caller" &&
                    name !== "callee" &&
                    name !== "arguments" &&
                    typeof origin.prototype[name] === "function"
                );
            }
        );

        methodNames.forEach(function(name) {
            assert.isTrue(Object.prototype.hasOwnProperty.call(p, name), name);
        });
    });
}
