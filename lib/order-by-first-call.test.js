"use strict";

const assert = require("@sinonjs/referee-sinon").assert;
const knuthShuffle = require("knuth-shuffle").knuthShuffle;
const sinon = require("@sinonjs/referee-sinon").sinon;
const orderByFirstCall = require("./order-by-first-call");

describe("orderByFirstCall", function () {
    it("should order an Array of spies by the callId of the first call, ascending", function () {
        // create an array of spies
        const spies = [
            sinon.spy(),
            sinon.spy(),
            sinon.spy(),
            sinon.spy(),
            sinon.spy(),
            sinon.spy(),
        ];

        // call all the spies
        spies.forEach((spy) => {
            spy();
        });

        // add a few uncalled spies
        spies.push(sinon.spy());
        spies.push(sinon.spy());

        // randomise the order of the spies
        knuthShuffle(spies);

        const sortedSpies = orderByFirstCall(spies);

        assert.equals(sortedSpies.length, spies.length);

        const orderedByFirstCall = sortedSpies.every((spy, index) => {
            if (index + 1 === sortedSpies.length) {
                return true;
            }
            const nextSpy = sortedSpies[index + 1];

            // uncalled spies should be ordered first
            if (!spy.called) {
                return true;
            }

            return spy.calledImmediatelyBefore(nextSpy);
        });

        assert.isTrue(orderedByFirstCall);
    });
});
