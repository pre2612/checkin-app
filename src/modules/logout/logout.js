"use strict";
//Logout Click Event call firebase unauth hide content and show login modal
CheckIn.Logout = $("#logout");
$(function () {
    CheckIn.Logout.on("click", function () {
        firebaseRef.unauth();
        CheckIn.ContentShowHide.hide();
        CheckIn.LoginModal.show();
    });
});