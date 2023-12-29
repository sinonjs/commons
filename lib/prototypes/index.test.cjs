"use strict";

var assert = require("@sinonjs/referee-sinon").assert;

var arrayProto = require("./index.cjs").array;
var functionProto = require("./index.cjs").function;
var mapProto = require("./index.cjs").map;
var objectProto = require("./index.cjs").object;
var setProto = require("./index.cjs").set;
var stringProto = require("./index.cjs").string;
var throwsOnProto = require("./throws-on-proto.cjs");

describe("prototypes", function () {
    describe(".array", function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        verifyProperties(arrayProto, Array);
    });
    describe(".function", function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        verifyProperties(functionProto, Function);
    });
    describe(".map", function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        verifyProperties(mapProto, Map);
    });
    describe(".object", function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        verifyProperties(objectProto, Object);
    });
    describe(".set", function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        verifyProperties(setProto, Set);
    });
    describe(".string", function () {
        // eslint-disable-next-line mocha/no-setup-in-describe
        verifyProperties(stringProto, String);
    });
});

function verifyProperties(p, origin) {
    var disallowedProperties = ["size", "caller", "callee", "arguments"];
    if (throwsOnProto) {
        disallowedProperties.push("__proto__");
    }

    it("should have all the methods of the origin prototype", function () {
        var methodNames = Object.getOwnPropertyNames(origin.prototype).filter(
            function (name) {
                if (disallowedProperties.includes(name)) {
                    return false;
                }

                return typeof origin.prototype[name] === "function";
            }
        );

        methodNames.forEach(function (name) {
            assert.isTrue(Object.prototype.hasOwnProperty.call(p, name), name);
        });
    });
}
