'use strict';

var config = {};

config.seleniumAddress = 'http://localhost:4444/wd/hub';
config.specs = 'src/**/*.e2e.spec.js';

config.onPrepare = function() {
    browser.driver.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
};

exports.config = config;
