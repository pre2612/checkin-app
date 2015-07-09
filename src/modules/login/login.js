"use strict";
CheckIn.UserName = CheckIn.UserName || {};
CheckIn.UserEmail = CheckIn.UserEmail || {};
//find this element attach a login click event and on click check if login credentials are right
// and show content accordingly also if logged in display users Name
(function ($, checkin, fireBase) {

    checkin.Login = {
        init: function (elem) {
            this.loginEle = $(elem);
            this.setUp();
            this.ifAuth();
        },
        //set click event
        setUp: function () {
            this.loginEle.on("click", checkin.Login.loginClick);
        },
        /*Login btn click takes email and pwd values from login modal and pass it on to
        firebase authwithpwd. On login show main content and display username if error show message if fields are empty or wrong username pwd*/
        loginClick: function (event) {
            event.preventDefault();
            var $email = checkin.LoginModal.getEmailVal(),
                $pwd = checkin.LoginModal.getPwd(),
                $formGrp = $("form").find(".form-group"),
                $error = $("#error"),
                $errorLbl = $error.find("label");
            fireBase.authWithPassword({
                email: $email,
                password: $pwd
            }, function (error, authData) {
                if (error) {
                    $formGrp.addClass("has-error");
                    $error.show();
                    if (($email === '') || ($pwd === '')) {
                        $errorLbl.text("Fields cannot be empty!");
                    } else {
                        $errorLbl.text("Please make sure you enter right email and password!");
                    }
                } else {
                    checkin.Login.getUserName(authData.password.email);
                    checkin.Login.showContent();
                }
            });
        },
        // Once authenticated show the main-content and hide login modal
        showContent: function () {
            checkin.ContentShowHide.show();
            checkin.LoginModal.hide();
        },
        //if user is authenticated show username and content or show the login modal
        checkIfAuth: function (authData) {
            if (authData) {
                checkin.Login.getUserName(authData.password.email);
                checkin.Login.showContent();
            } else {
                checkin.LoginModal.show();
            }
        },
        // On every reload check if User is authenticated using firebase onAuth
        ifAuth: function () {
            fireBase.onAuth(this.checkIfAuth);
        },
        //Get Username from email and display it
        getUserName: function (email) {
            var $username = $("#username");
            $(checkin.data.users).each(function () {
                if (this.email === email) {
                    checkin.UserName = this.name;
                    checkin.UserEmail = this.email;
                    $username.text(checkin.UserName);
                }
            });
        }
    };

    $(function () {
        CheckIn.Login.init("#login");
    });

}(jQuery, CheckIn, firebaseRef));
