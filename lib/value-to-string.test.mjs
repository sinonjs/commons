import pkg from "@sinonjs/referee-sinon";
const { assert } = pkg;
import valueToString from "./value-to-string.mjs";

describe("util/core/valueToString", function () {
    it("returns string representation of an object", function () {
        var obj = {};

        assert.equals(valueToString(obj), obj.toString());
    });

    it("returns 'null' for literal null'", function () {
        assert.equals(valueToString(null), "null");
    });

    it("returns 'undefined' for literal undefined", function () {
        assert.equals(valueToString(undefined), "undefined");
    });
});
