"use strict";

const noPrototypeMethods = require("@sinonjs/eslint-plugin-no-prototype-methods");
const sinonConfig = require("@sinonjs/eslint-config");

module.exports = [
    {
        ignores: ["eslint.config.js", "types/**"],
    },
    ...sinonConfig,
    {
        plugins: {
            "@sinonjs/no-prototype-methods": noPrototypeMethods,
        },
        rules: {
            "@sinonjs/no-prototype-methods/no-prototype-methods": "error",
        },
    },
    {
        files: ["**/*.test.js"],
        rules: {
            "@sinonjs/no-prototype-methods/no-prototype-methods": "off",
        },
    },
];
