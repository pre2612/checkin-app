"use strict";
//Load methods on data change from backend
firebaseRef.on("value", function (data) {
    CheckIn.data = data.val();
    CheckIn.ContentShowHide.init("#content-menu");
    CheckIn.LoginModal.init("#loginModal");
    CheckIn.Login.init("#login");
    CheckIn.CheckInHandlebars.init("#checkIn-list");
    CheckIn.CheckOutHandlebars.init("#checkOut-list");
    CheckIn.DeviceList();

});