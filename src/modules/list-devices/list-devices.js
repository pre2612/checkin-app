"use strict";

CheckIn.DeviceList = CheckIn.DeviceList || {};

CheckIn.DeviceList = function () {
    $(function () {
        var $listDevice = $("#device-list"),
            $section = $(CheckIn.Handlebars["list-devices"](CheckIn.data)),//marry handlebar templates with data
            $sectionRow = $section.find("tr");
        $sectionRow.each(function () {
            var $this = $(this),
                $device = $(this).find(".device-name"),
                $email = $(this).find(".email"),
                $username = CheckIn.UserName,
                $userEmail = CheckIn.UserEmail,
                $checkOutList = CheckIn.data.checkOut,
                $text = $device.text(),
                d = new Date(),
                //find the buttons change text and add class according to device status for logged in user give access to check out
                $updateBtnText = function () {
                    $.each($checkOutList, function () {
                        if ($text === this.device) {
                            if (this.name === $username) {
                                $email.text(CheckIn.UserEmail);
                                $this.find("button").text("Check-In");
                                $this.find("button").addClass("checkin-click").removeClass("checkout-click");
                            } else {
                                $email.text(this.email);
                                $this.find("button").text("Request");
                                $this.find("button").addClass("request-click").removeClass("checkout-click");
                            }
                        }
                    });
                },
                //remove the node from firebase on respective btn clicks
                $removeNode = function (obj) {
                    var arr = CheckIn.data.checkOut;
                    $.each(arr, function (index, value) {
                        var objName = obj.device;
                        var name = value.device;
                        if (name === objName) {
                            delete arr[index];
                        }
                    });
                    firebaseRef.child("checkOut").set(arr);

                };
            $updateBtnText();
            //send email to person who took device with device name
            $this.on("click", ".request-click", function () {
                var email = $this.find(".email").text(),
                    subject = "Device Request",
                    emailBody = "Hi, I need " + $device.text() + " when you are done!";
                window.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
            });
            //Push the data to backend to update the devices checked-in and also remove it from checked-out
            $this.on("click", ".checkin-click", function () {
                $email.html("");
                $(this).text("Check-Out");
                $(this).addClass("checkout-click").removeClass("checkin-click");
                var obj = {name: $username, date: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), device: $text, email: $userEmail},
                    child = firebaseRef.child("checkIn");
                child.push(obj);
                $removeNode(obj);
            });
            //Push the data to backend to update the devices checked-out
            $this.on("click", ".checkout-click", function () {
                $email.html($userEmail);
                $(this).text("Check-In");
                $(this).addClass("checkin-click").removeClass("checkout-click");
                var obj = {name: $username, date: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), device: $text, email: $userEmail},
                    child = firebaseRef.child("checkOut");
                child.push(obj);
            });
        });
        // find the  element and then replace this element with generated HTML;
        $listDevice.replaceWith($section);
    });

};
