"use strict";

/**
 * Returns a string representation of the value
 * @param  {*} value
 * @returns {string}
 */
function valueToString(value) {
    if (value && value.toString) {
        return value.toString();
    }
    return String(value);
}

module.exports = valueToString;
