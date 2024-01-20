/**
 * A reference to the global object
 * @type {object} globalObject
 */
var globalObject;
if (typeof global !== "undefined") {
    // Node
    globalObject = global;
} /* c8 ignore start */ else if (typeof window !== "undefined") {
    // Browser
    globalObject = window;
} else {
    // WebWorker
    globalObject = self;
}
/* c8 ignore stop */

export default globalObject;
