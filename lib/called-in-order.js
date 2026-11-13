"use strict";

const every = require("./prototypes/array").every;

/**
 * @private
 */
function hasCallsLeft(callMap, spy) {
    if (callMap[spy.id] === undefined) {
        callMap[spy.id] = 0;
    }

    return callMap[spy.id] < spy.callCount;
}

/**
 * @private
 */
function checkAdjacentCalls(callMap, spy, index, spies) {
    let calledBeforeNext = true;

    if (index !== spies.length - 1) {
        calledBeforeNext = spy.calledBefore(spies[index + 1]);
    }

    if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
        callMap[spy.id] += 1;
        return true;
    }

    return false;
}

/**
 * A Sinon proxy object (fake, spy, stub)
 * @typedef {object} SinonProxy
 * @property {Function} calledBefore - A method that determines if this proxy was called before another one
 * @property {string} id - Some id
 * @property {number} callCount - Number of times this proxy has been called
 */

/**
 * Returns true when the spies have been called in the order they were supplied in
 * @param  {SinonProxy[] | SinonProxy} spies An array of proxies, or several proxies as arguments
 * @param  {...SinonProxy} moreSpies The remaining proxies, when passed as separate arguments
 * @returns {boolean} true when spies are called in order, false otherwise
 */
function calledInOrder(spies, ...moreSpies) {
    const callMap = {};
    const allSpies = moreSpies.length > 0 ? [spies, ...moreSpies] : spies;

    return every(allSpies, checkAdjacentCalls.bind(null, callMap));
}

module.exports = calledInOrder;
