"use strict";
//Firebase event to fire on any backend value change and initial value from backend
firebaseRef.on("value", function (data) {
    CheckIn.data = data.val(); //Global variable to hold data from firebase
    CheckIn.ContentShowHide.init("#content-menu"); //Used to hide and show main content
    CheckIn.LoginModal.init("#loginModal"); //Used to get email & pwd values from loginModal also show when user is not authenticated
    CheckIn.Login.init("#login"); //Used to authenticate user and check on reloads if user is authenticated
    CheckIn.CheckInHandlebars.init("#checkIn-list"); // find this  element, and then replace this element with handlebars generated HTML;
    CheckIn.CheckOutHandlebars.init("#checkOut-list"); // find this  element, and then replace this element with handlebars generated HTML;
    CheckIn.DeviceList(); // Create device list and add or remove data from firebase

});