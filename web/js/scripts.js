﻿$(document).ready(function() {
    var $menu = $('nav'),
        $menuToggle = $('.menu-toggle');

    $menuToggle.click(function() {
        $menuToggle.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

    equalheight = function(container){
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

        $(container).each(function() {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function() {
        equalheight('.equal');
    });


    $(window).resize(function() {
        equalheight('.equal');
    });

    var isMobile = jQuery.browser.mobile ? true : false;

    $('.help-popover').on('click', function(e) {
        e.preventDefault();
        $this = $(this);

        if ($this.parent().hasClass('help-popover-link')) {
            var link = $this.parent();
            link.attr("target", "_blank");
            window.open(link.attr("href"));
            return false;
        }
    });

    $('[data-toggle="popover"]').popover({
        trigger: isMobile ? 'click' : 'hover',
        placement: isMobile ? 'auto' : 'right'
    });
});
