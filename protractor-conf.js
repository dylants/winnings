"use strict";

var BPromise = require("bluebird");

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        "test/client/e2e/*.js"
    ],

    multiCapabilities: [{
        browserName: "firefox"
    }, {
        browserName: "chrome"
    }],

    baseUrl: "http://localhost:3001/",

    beforeLaunch: function() {
        console.log("Starting setup...");
    },

    afterLaunch: function() {
        console.log("Starting cleanup...");
    },

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
