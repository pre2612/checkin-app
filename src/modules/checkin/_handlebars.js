"use strict";
/// find the element checkIn-list, and then replace this element with handlebars generated HTML;
(function ($, checkin) {

    checkin.CheckInHandlebars = {
        init: function (elem) {
            this.checkInEle = $(elem);
            this.setUp();
        },
        setUp: function () {
            var $section = $(CheckIn.Handlebars["check-in"](CheckIn.data));
            this.checkInEle.html("");// empty the element html so there is no dual values
            this.checkInEle.replaceWith($section);// replace element with handlebar generated html
        }
    };

}(jQuery, CheckIn));