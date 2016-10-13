'use strict';
var Page = function () {
    browser.driver.get('http://127.0.0.1:2468/dist');
};

 Page.prototype = Object.create({}, {
    hasClass: {
        value: function(element, cls) {
            return element.getAttribute('class').then(function (classes) {
                return classes.split(' ').indexOf(cls) !== -1;
            });
        }
    },
    getAttr: {
        value: function(element, attr) {
            return element.getAttribute(attr).then(function (val) {
                return val;
            });
        }
    },
    getBaseUrl: {
        value: function() {
            return browser.getProcessedConfig().then(function(config) {
                return browser.driver.get('http://127.0.0.1:2468/dist');
            });
        }
    },
    addCookie: {
        value: function addCookie(name, value) {
            return browser.manage().addCookie(name, value, '/', '127.0.0.1');
        }
    },
    deleteAllCookies: {
        value: function() {
            return browser.manage().deleteAllCookies();
        }
    },
    setCss: { 
        value: function setCss(element, style) {
            return browser.driver.executeScript('arguments[0].style = { '+style+' };', element);
        }
    },
    scrollIntoView: {
        value: function scrollIntoView(element) {
            return browser.driver.executeScript('arguments[0].scrollIntoView();', element);
        }
    }
});

module.exports = Page;