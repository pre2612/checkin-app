"use strict";

//single var pattern
var firebaseRef = new Firebase("https://checkin-checkout.firebaseio.com/"), //Define firebase global variable to access
    CheckIn = CheckIn || {}; //Global namespace for Entire app
    CheckIn.data = CheckIn.data || {};
