import pkg from "@sinonjs/referee-sinon";
const assert = pkg.assert;

import globalObject from "./global.mjs";

describe("global", function () {
    before(function () {
        if (typeof global === "undefined") {
            this.skip();
        }
    });

    it("is same as global", function () {
        assert.same(globalObject, global);
    });
});
