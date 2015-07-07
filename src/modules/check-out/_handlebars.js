"use strict";
// find the element checkOut-list, and then replace this element with handlebars generated HTML;
(function ($, checkin) {

    checkin.CheckOutHandlebars = {
        init: function (elem) {
            this.checkOutEle = $(elem);
            this.setUp();
        },
        setUp: function () {
            var $section = $(CheckIn.Handlebars["check-out"](CheckIn.data));
            this.checkOutEle.html("");// empty the element html so there is no dual values
            this.checkOutEle.replaceWith($section);// replace element with handlebar generated html
        }
    };
}(jQuery, CheckIn));