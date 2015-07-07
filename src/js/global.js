"use strict";

//single var pattern
var firebaseRef = new Firebase("https://checkin-checkout.firebaseio.com/"), //Define firebase global variable to access
    CheckIn = CheckIn || {}; //Global namespace for Entire app
    CheckIn.data = CheckIn.data || {};
firebaseRef.set({
    "users": [
        {"name": "Preethy Borrawar", "email": "pborrawar@celerity.com"},
        {"name": "Daniel Cashman", "email": "dcashman@celerity.com"},
        {"name": "Tim Stephens", "email": "tstephens@celerity.com"},
        {"name": "Savitha Yelisetty", "email": "syelisetty@celerity.com"},
        {"name": "Kanthamnai Bhusarapu", "email": "kbhusarapu@celerity.com"},
        {"name": "Joshua Ginsberg", "email": "jginsberg@celerity.com"}
    ],
    "checkIn": [
        {
            name: "Preethy Borrawar",
            date: "06/06/2015",
            device: "Nexus 6",
            email: "pborrawar@celerity.com"
        },
        {
            name: "Tim Stephens",
            date: "06/06/2015",
            device: "Sony Xperia Z3",
            email: "tstephens@celerity.com"
        },
        {
            name: "Daniel Cashman",
            date: "06/06/2015",
            device: "iPhone 4",
            email: "dcashman@celerity.com"
        },
        {
            name: "Daniel Cashman",
            date: "06/06/2015",
            device: "iPhone 5",
            email: "dcashman@celerity.com"
        },
        {
            name: "Tim Stephens",
            date: "06/06/2015",
            device: "iPhone mini",
            email: "tstephens@celerity.com"
        }
    ],
    "checkOut": [
        {
            name: "Savitha Yelisetty",
            date: "06/06/2015",
            device: "iPhone 6 Plus",
            email: "syelisetty@celerity.com"
        }
    ],
    "devices": [
        {
            name: "Nexus 6"
        },
        {
            name: "Nexus 7"
        },
        {
            name: "Nexus 10"
        },
        {
            name: "Nexus 4"
        },
        {
            name: "Sony Xperia Z3"
        },
        {
            name: "iPhone 6 Plus"
        },
        {
            name: "Samsung Galaxy Note 4"
        },
        {
            name: "Samsung Galaxy S6 Edge"
        },
        {
            name: "LG G4"
        },
        {
            name: "iPhone 4"
        },
        {
            name: "iPhone 5"
        },
        {
            name: "iPhone mini"
        },
        {
            name: "iPhone 3"
        },
        {
            name: "iPad 4"
        }
    ]
});
