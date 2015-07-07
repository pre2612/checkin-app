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
        // Login click event check if auth
        loginClick: function (event) {
            event.preventDefault();
            var $email = checkin.LoginModal.getEmailVal(),
                $pwd = checkin.LoginModal.getPwd();

            fireBase.authWithPassword({
                email: $email,
                password: $pwd
            }, function (authData) {
                if (authData) {
                    checkin.Login.getUserName(authData.password.email);
                    checkin.Login.showContent();
                }
            });
        },
        // Show Content and Hide Login Modal
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
        // Callback to fire on auth
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
