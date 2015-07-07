"use strict";
// find the  element, make an Ajax call, and then replace this element with handlebars generated HTML;
(function ($, checkin) {

    checkin.CheckInHandlebars = {
        init: function (elem) {
            this.checkInEle = $(elem);
            this.setUp();
        },
        //set Check-In click event
        setUp: function () {
            var $section = $(CheckIn.Handlebars["check-in"](CheckIn.data));
            this.checkInEle.html("");
            this.checkInEle.replaceWith($section);
        }
    };

}(jQuery, CheckIn));