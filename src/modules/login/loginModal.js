"use strict";
(function ($, checkin) {
//get Login form email and pwd values show and hide login modal accordingly
    checkin.LoginModal = {
        init: function (elem) {
            this.loginModal = $(elem);
            this.emailVal = this.loginModal.find("#login-email");
            this.pwd = this.loginModal.find("#login-password");
        },
        // Show modal
        show: function () {
            this.loginModal.modal("show");
        },
        // Hide modal
        hide: function () {
            this.loginModal.modal("hide");
        },
        // Get email value from Modal
        getEmailVal: function () {
            return this.emailVal.val();
        },
        // Get pwd value from Modal
        getPwd: function () {
            return this.pwd.val();
        }
    };

    // Initialize Login modal div with DOM element when DOM is ready
    $(function () {
        checkin.LoginModal.init("#loginModal");
    });

}(jQuery, CheckIn));