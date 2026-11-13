"use strict";

const assert = require("@sinonjs/referee-sinon").assert;
const index = require("./index");

const expectedMethods = [
    "calledInOrder",
    "className",
    "every",
    "functionName",
    "orderByFirstCall",
    "typeOf",
    "valueToString",
];
const expectedObjectProperties = ["deprecated", "prototypes"];

describe("package", function () {
    // eslint-disable-next-line mocha/no-setup-in-describe
    expectedMethods.forEach((name) => {
        it(`should export a method named ${name}`, function () {
            assert.isFunction(index[name]);
        });
    });

    // eslint-disable-next-line mocha/no-setup-in-describe
    expectedObjectProperties.forEach((name) => {
        it(`should export an object property named ${name}`, function () {
            assert.isObject(index[name]);
        });
    });
});
