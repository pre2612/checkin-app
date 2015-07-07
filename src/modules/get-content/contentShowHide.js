"use strict";
//This is used to hide the content from unauth user and to show when authenticated
CheckIn.ContentShowHide = CheckIn.ContentShowHide || {};
(function ($, checkin) {

    checkin.ContentShowHide = {

        init: function (elem) {
            this.mainContent = $(elem);
            this.hide();
        },
        // Show Main Content
        show: function () {
            this.mainContent.show();
        },
        // Hide main content
        hide: function () {
            this.mainContent.hide();
        }
    };

    // Initialize Main Content Area div with DOM element when DOM is ready
    $(function () {
        checkin.ContentShowHide.init("#content-menu");
    });

}(jQuery, CheckIn));