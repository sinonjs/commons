"use strict";

const assert = require("@sinonjs/referee-sinon").assert;

const arrayProto = require("./index").array;
const functionProto = require("./index").function;
const mapProto = require("./index").map;
const objectProto = require("./index").object;
const setProto = require("./index").set;
const stringProto = require("./index").string;
const throwsOnProto = require("./throws-on-proto");

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
    const disallowedProperties = ["size", "caller", "callee", "arguments"];
    if (throwsOnProto) {
        disallowedProperties.push("__proto__");
    }

    it("should have all the methods of the origin prototype", function () {
        const methodNames = Object.getOwnPropertyNames(origin.prototype).filter(
            (name) => {
                if (disallowedProperties.includes(name)) {
                    return false;
                }

                return typeof origin.prototype[name] === "function";
            }
        );

        methodNames.forEach((name) => {
            assert.isTrue(Object.hasOwn(p, name), name);
        });
    });
}
