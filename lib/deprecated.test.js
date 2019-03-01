/* eslint-disable no-console */
"use strict";

var assert = require("@sinonjs/referee-sinon").assert;
var sinon = require("@sinonjs/referee-sinon").sinon;

var deprecated = require("./deprecated");

var msg = "test";

describe("deprecated", function() {
    describe("defaultMsg", function() {
        it("should return a string", function() {
            assert.equals(
                deprecated.defaultMsg("sinon", "someFunc"),
                "sinon.someFunc is deprecated and will be removed from the public API in a future version of sinon."
            );
        });
    });

    describe("printWarning", function() {
        describe("when `console` is defined", function() {
            beforeEach(function() {
                sinon.replace(console, "info", sinon.fake());
                sinon.replace(console, "log", sinon.fake());
            });

            afterEach(sinon.restore);

            describe("when `console.info` is defined", function() {
                it("shoudl call `console.info` with a message", function() {
                    deprecated.printWarning(msg);
                    assert.calledOnceWith(console.info, msg);
                });
            });

            describe("when `console.info` is undefined", function() {
                it("should call `console.log` with a message", function() {
                    console.info = undefined;
                    deprecated.printWarning(msg);
                    assert.calledOnceWith(console.log, msg);
                });
            });
        });
    });

    describe("wrap", function() {
        var method = sinon.fake();
        var wrapped;
        beforeEach(function() {
            wrapped = deprecated.wrap(method, msg);
        });

        it("should return a wrapper function", function() {
            assert.match(wrapped, sinon.match.func);
        });

        it("should call `printWarning` before invoking", function() {
            sinon.replace(deprecated, "printWarning", sinon.fake());
            wrapped({});
            assert.calledOnceWith(deprecated.printWarning, msg);
            assert.calledOnceWith(method, {});
        });
    });
});
