"use strict";

const sort = require("./prototypes/array").sort;
const slice = require("./prototypes/array").slice;

/**
 * @private
 */
function comparator(a, b) {
    // uuid, won't ever be equal
    const aCall = a.getCall(0);
    const bCall = b.getCall(0);
    const aId = (aCall && aCall.callId) || -1;
    const bId = (bCall && bCall.callId) || -1;

    return aId < bId ? -1 : 1;
}

/**
 * A Sinon proxy object (fake, spy, stub)
 * @typedef {object} SinonProxy
 * @property {Function} getCall - A method that can return the first call
 */

/**
 * Sorts an array of SinonProxy instances (fake, spy, stub) by their first call
 * @param  {SinonProxy[] | SinonProxy} spies
 * @returns {SinonProxy[]}
 */
function orderByFirstCall(spies) {
    return sort(slice(spies), comparator);
}

module.exports = orderByFirstCall;
