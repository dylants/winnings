"use strict";

var packageConfig = require("../../package.json");

module.exports = {
    appName: packageConfig.name,
    port: process.env.PORT || 3000,
    templateEngine: "swig",
    sessionSecret: packageConfig.name + " super secret phrase",
    mongo: {
        protocol: process.env.MONGO_PROTOCOL || "mongodb://",
        host: process.env.MONGO_HOST || "localhost",
        port: process.env.MONGO_PORT || 27017,
        database: process.env.MONGO_DATABASE || packageConfig.name
    },
    assets: {
        lib: {
            css: [

            ],
            js: [
                // jquery
                "public/lib/jquery/dist/jquery.js",

                // angular
                "public/lib/angular/angular.js",
                "public/lib/angular-resource/angular-resource.js",
                "public/lib/angular-ui-router/release/angular-ui-router.js"
            ]
        },
        css: [
            "public/dist/modules/**/*.css"
        ],
        js: [
            "public/config.js",
            "public/application.js",
            "public/modules/*/*.js",
            "public/modules/**/*.js"
        ],
        tests: [
            "public/lib/angular-mocks/angular-mocks.js",
            "test/client/unit/**/*.js"
        ]
    }
};
