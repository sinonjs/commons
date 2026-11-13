"use strict";

/**
 * A reference to the global object
 * @type {object} globalObject
 */
let globalObject;

/* istanbul ignore else */
if (typeof global !== "undefined") {
    // Node
    globalObject = globalThis;
} else if (typeof window !== "undefined") {
    // Browser
    globalObject = globalThis;
} else {
    // WebWorker
    globalObject = globalThis;
}

module.exports = globalObject;
