"use strict";

const jsc = require("jsverify");
const refute = require("@sinonjs/referee-sinon").refute;

const functionName = require("./function-name");

describe("function-name", function () {
    it("should return empty string if func is falsy", function () {
        jsc.assertForall("falsy", (fn) => functionName(fn) === "");
    });

    it("should use displayName by default", function () {
        jsc.assertForall("nestring", (displayName) => {
            const fn = { displayName };

            return functionName(fn) === fn.displayName;
        });
    });

    it("should use name if displayName is not available", function () {
        jsc.assertForall("nestring", (name) => {
            const fn = { name };

            return functionName(fn) === fn.name;
        });
    });

    it("should fallback to string parsing", function () {
        jsc.assertForall("nat", (naturalNumber) => {
            const name = `fn${naturalNumber}`;
            const fn = {
                toString() {
                    return `\nfunction ${name}`;
                },
            };

            return functionName(fn) === name;
        });
    });

    it("should not fail when a name cannot be found", function () {
        refute.exception(() => {
            const fn = {
                toString() {
                    return "\nfunction (";
                },
            };

            functionName(fn);
        });
    });

    it("should not fail when toString is undefined", function () {
        refute.exception(() => {
            functionName(Object.create(null));
        });
    });

    it("should not fail when toString throws", function () {
        refute.exception(() => {
            let fn;
            try {
                // eslint-disable-next-line no-eval
                fn = eval("(function*() {})")().constructor;
            } catch {
                // env doesn't support generators
                return;
            }

            functionName(fn);
        });
    });
});
