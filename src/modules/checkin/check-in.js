/*jslint browser: true */
/*global CheckIn: true, jQuery: true, $: true, Firebase: true, firebaseRef: true */
"use strict";

(function ($, checkin) {

    checkin.CheckIn = {
        init: function (elem) {
            this.$elem = $(elem);
            this.setup();
        },
        //set Check-In click event
        setup: function () {
            this.$elem.on("click", "td button", checkin.CheckIn.checkInClick);
        },

        // Get Name of the Person of the Input with id "name"
        getName: function () {
            return this.$name.val();
        },

        // Get Device name of the Input with id "device"
        getDevice: function () {
            return this.$device.val();
        },

        // Click event for check-in btn to push data to firebase with today's date
        checkInClick: function (event) {
            //var d = new Date(); // get todays Date

            /*firebaseRef.child("check-out").push({
                name: checkin.CheckIn.getName(),
                checkin: [{"name": "Preethy Borrawar"},{"date": d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()}]
            });*/

            //checkin.Typeahaed.clearInput();
        }
    };

    // Initialize check-in div with DOM element when DOM is ready
    $(function () {
        checkin.CheckIn.init("#check-in-tab");
    });

}(jQuery, CheckIn));