"use strict";

/**
 * Returns true when fn returns true for all members of obj.
 * This is an every implementation that works for all iterables
 * @param  {object}   obj
 * @param  {Function} fn
 * @returns {boolean}
 */
module.exports = function every(obj, fn) {
    let pass = true;

    try {
        obj.forEach(function (...args) {
            if (!fn.apply(this, args)) {
                // Throwing an error is the only way to break `forEach`
                throw new Error();
            }
        });
    } catch {
        pass = false;
    }

    return pass;
};
