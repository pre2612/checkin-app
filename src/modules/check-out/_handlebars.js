"use strict";
// find the  element, make an Ajax call, and then replace this element with handlebars generated HTML;
(function ($, checkin) {

    checkin.CheckOutHandlebars = {
        init: function (elem) {
            this.checkOutEle = $(elem);
            this.setUp();
        },
        //set Check-In click event
        setUp: function () {
            var $section = $(CheckIn.Handlebars["check-out"](CheckIn.data));
            this.checkOutEle.html("");
            this.checkOutEle.replaceWith($section);
        }
    };
}(jQuery, CheckIn));