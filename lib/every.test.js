"use strict";

const assert = require("@sinonjs/referee-sinon").assert;
const sinon = require("@sinonjs/referee-sinon").sinon;
const every = require("./every");

describe("util/core/every", function () {
    it("returns true when the callback function returns true for every element in an iterable", function () {
        const obj = [true, true, true, true];
        const allTrue = every(obj, (val) => val);

        assert(allTrue);
    });

    it("returns false when the callback function returns false for any element in an iterable", function () {
        const obj = [true, true, true, false];
        const result = every(obj, (val) => val);

        assert.isFalse(result);
    });

    it("calls the given callback once for each item in an iterable until it returns false", function () {
        const iterableOne = [true, true, true, true];
        const iterableTwo = [true, true, false, true];
        const callback = sinon.spy((val) => val);

        every(iterableOne, callback);
        assert.equals(callback.callCount, 4);

        callback.resetHistory();

        every(iterableTwo, callback);
        assert.equals(callback.callCount, 3);
    });
});
