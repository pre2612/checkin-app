"use strict";

CheckIn.DeviceList = CheckIn.DeviceList || {};
/*This is used to generate Device list from data and pass it to handlebar template and loop through each row in table and add respective class to buttons
according to their status comparing with checkedOutList also on click update data and remove appropriate node from the the firebase Child , set click events for buttons*/
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
                    var key;
                    for (key in $checkOutList) {
                        if ($checkOutList.hasOwnProperty(key)) {
                            if ($text === $checkOutList[key].device) {
                                if ($checkOutList[key].name === $username) {
                                    $email.text(CheckIn.UserEmail);
                                    $this.find("button").text("Check-In");
                                    $this.find("button").addClass("checkin-click").removeClass("checkout-click");
                                } else {
                                    $email.text($checkOutList[key].email);
                                    $this.find("button").text("Request");
                                    $this.find("button").addClass("request-click").removeClass("checkout-click");
                                }
                            }
                        }
                    }
                },
                //remove the node from firebase on respective btn clicks
                $removeNode = function (obj) {
                    var arr = CheckIn.data.checkOut,
                        key;
                    for (key in arr) {
                        if (arr.hasOwnProperty(key)) {
                            if (arr[key].device === obj.device) {
                                delete arr[key];
                            }
                        }
                    }
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
