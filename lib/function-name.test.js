"use strict";

var jsc = require("jsverify");
var assert = require("@sinonjs/referee-sinon").assert;
var refute = require("@sinonjs/referee-sinon").refute;

var functionName = require("./function-name");

describe("function-name", function () {
    it("should return empty string if func is falsy", function () {
        jsc.assertForall("falsy", function (fn) {
            return functionName(fn) === "";
        });
    });

    it("should use displayName by default", function () {
        jsc.assertForall("nestring", function (displayName) {
            var fn = { displayName: displayName };

            return functionName(fn) === fn.displayName;
        });
    });

    it("should use name if displayName is not available", function () {
        jsc.assertForall("nestring", function (name) {
            var fn = { name: name };

            return functionName(fn) === fn.name;
        });
    });

    it("should fallback to string parsing", function () {
        jsc.assertForall("nat", function (naturalNumber) {
            var name = `fn${naturalNumber}`;
            var fn = {
                toString: function () {
                    return `\nfunction ${name}`;
                },
            };

            return functionName(fn) === name;
        });
    });

    it("should return empty string when a name cannot be found", function () {
        var fn = {
            toString: function () {
                return "\nfunction (";
            },
        };

        assert.equals(functionName(fn), "");
    });

    it("should return empty string for an anonymous function", function () {
        assert.equals(
            functionName(function () {
                return null;
            }),
            ""
        );
    });

    it("should return empty string for an anonymous arrow function", function () {
        assert.equals(
            functionName(() => null),
            ""
        );
    });

    it("should return empty string for an anonymous class", function () {
        assert.equals(functionName(class {}), "");
    });

    it("should not fail when toString is undefined", function () {
        refute.exception(function () {
            functionName(Object.create(null));
        });
    });

    it("should not fail when toString throws", function () {
        refute.exception(function () {
            var fn;
            try {
                // eslint-disable-next-line no-eval
                fn = eval("(function*() {})")().constructor;
            } catch (e) {
                // env doesn't support generators
                return;
            }

            functionName(fn);
        });
    });
});
