(function($) {
    $('svg .path a').mouseenter(function () { 
        $('.mobile-test .text'+$(this).data('text')).css({display:'block'});
    });
    $('svg .path a').mouseleave(function () { 
        $('.mobile-test .text'+$(this).data('text')).attr('style','');
    });

})(window.jQuery);

