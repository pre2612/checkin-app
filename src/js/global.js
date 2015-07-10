"use strict";

//single var pattern
//Firebase is backend, including data storage, user authentication, static hosting
var firebaseRef = new Firebase("https://checkin-checkout.firebaseio.com/"), //Define firebase global variable to access
    CheckIn = CheckIn || {}; //Global namespace for Entire app
    CheckIn.data = CheckIn.data || {};
