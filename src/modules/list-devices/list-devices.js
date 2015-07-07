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
                $checkInList = CheckIn.data.checkIn,
                $checkOutList = CheckIn.data.checkOut,
                $text = $device.text(),
                d = new Date(),
                //find the buttons change text and add class according to device status for logged in user give access to check out
                $updateBtnText = function () {
                    $.each($checkInList, function () {
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
                $removeNode = function (obj, arr, child) {
                    $.each(arr, function (i) {
                        var objName = obj.name;
                        var name = arr[i].name;
                        if (name === objName) {
                            arr.splice(i, 1);
                            return false;
                        }

                    });
                    child.set[arr];
                };
            $updateBtnText();
            //click evens for button to make a request for device
            $this.on("click", ".request-click", function () {
                var email = $this.find(".email").text(),
                    subject = 'Device Request',
                    emailBody = 'Hi, I need ' + $device.text() + ' when you are done!';
                window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
            });
            //click evens for button to check in device
            $this.on("click", ".checkin-click", function () {
                $this.find(".email").html("");
                $(this).text("Check-Out");
                $(this).addClass("checkout-click").removeClass("checkin-click");
                var fireBaseCheckIn = new Firebase("https://checkin-checkout.firebaseio.com/checkIn/" + $(this).attr("id"));
                fireBaseCheckIn.remove();
                var obj = {name: $username, date: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), device: $text, email: $userEmail},
                    child = firebaseRef.child("checkOut");
                child.push(obj);
                //$removeNode(obj, $checkInList, child);
            });
            //click evens for button to check out device
            $this.on("click", ".checkout-click", function () {
                $(this).text("Check-In");
                $(this).addClass("checkin-click").removeClass("checkout-click");
                var obj = {name: $username, date: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), device: $text, email: $userEmail},
                    child = firebaseRef.child("checkIn");
                child.push(obj);
                $removeNode(obj, $checkOutList, child);
            });
        });
        // find the  element and then replace this element with generated HTML;
        $listDevice.replaceWith($section);
    });

};
