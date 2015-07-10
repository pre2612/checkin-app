"use strict";
//On tabs click show respective content by adding and removing active class
$(function () {
    var $tabs = $("#tabs a"),
        activeClass = "active",
        $tabsContent = $("#main-content .content");
    $tabs.each(function () {
        var $tab = $(this);
        $tab.on("click", function () {
            var targetClass = $tab.data("content"),
                $tabsCurrent = $("." + targetClass);

            if ($tab.hasClass(activeClass) === false) {
                $tabs.filter("." + activeClass).removeClass(activeClass);
                $tab.addClass(activeClass);
                $tabsContent.filter("." + activeClass).removeClass(activeClass);
                $tabsCurrent.addClass(activeClass);
            }
        });
    });

});
