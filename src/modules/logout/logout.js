"use strict";
//Logout Click Event to log user out of app
CheckIn.Logout = $("#logout");
$(function () {
    CheckIn.Logout.on("click", function () {
        firebaseRef.unauth(); // logs user out of firebase
        CheckIn.ContentShowHide.hide(); //hide the main content
        CheckIn.LoginModal.show(); // show login modal
    });
});