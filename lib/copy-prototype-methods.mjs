import throwsOnProto from "./throws-on-proto.mjs";

var disallowedProperties = [
    // ignore size because it throws from Map
    "size",
    "caller",
    "callee",
    "arguments",
];

// This branch is covered when tests are run with `--disable-proto=throw`,
// however we cannot test both branches at the same time, so this is ignored
/* c8 ignore start */
if (throwsOnProto) {
    disallowedProperties.push("__proto__");
}
/* c8 ignore stop */

/**
 * Copies prototype methods into a new object that has no prototype
 * @param      {object}  prototype  The prototype to copy from
 * @returns    {object}  A new object that has the same methods of the prototype
 */
function copyPrototypeMethods(prototype) {
    const call = Function.call;

    // eslint-disable-next-line @sinonjs/no-prototype-methods/no-prototype-methods
    return Object.getOwnPropertyNames(prototype).reduce(function (
        result,
        name
    ) {
        if (disallowedProperties.includes(name)) {
            return result;
        }

        if (typeof prototype[name] !== "function") {
            return result;
        }

        result[name] = call.bind(prototype[name]);

        return result;
    },
    Object.create(null));
}

export default copyPrototypeMethods;
