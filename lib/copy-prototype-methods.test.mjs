import pkg from "@sinonjs/referee-sinon";
const { refute } = pkg;

import copyPrototypeMethods from "./copy-prototype-methods.mjs";

describe("copyPrototypeMethods", function () {
    it("does not throw for Map", function () {
        refute.exception(function () {
            copyPrototypeMethods(Map.prototype);
        });
    });
});
