import pkg from "@sinonjs/referee-sinon";
const { assert, refute } = pkg;

import copyPrototypeMethods from "./copy-prototype-methods.mjs";
import throwsOnProto from "./throws-on-proto.mjs";
import prototypes from "./prototypes.mjs";

const arrayProto = prototypes.array;
const functionProto = prototypes.function;
const mapProto = prototypes.map;
const objectProto = prototypes.object;
const setProto = prototypes.set;
const stringProto = prototypes.string;

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

    describe("copyPrototypeMethods", function () {
        it("does not throw for Map", function () {
            refute.exception(function () {
                copyPrototypeMethods(Map.prototype);
            });
        });
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
