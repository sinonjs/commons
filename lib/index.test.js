"use strict";

var assert = require("@sinonjs/referee-sinon").assert;
var fs = require("fs");
var index = require("./index");

// removes extension and camel cases filename
function filenameToMethod(name) {
    return name.split(".")[0].replace(/-(.)/g, function(_, chr) {
        return chr.toUpperCase();
    });
}

describe("package", function() {
    fs.readdirSync("./lib")
        .reduce(function(result, file) {
            // files that end with .js (excludes dirs) that do not include "index" or ".test"
            if (/^((?!index|\.test).)*\.js$/.test(file)) {
                result.push(filenameToMethod(file));
            }

            return result;
        }, [])
        .forEach(function(name) {
            it("should export: " + name, function() {
                assert.isFunction(index[name]);
            });
        });
});
