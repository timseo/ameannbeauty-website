(function($) {
    $('svg .path a').on('click', function (e) { 
        e.preventDefault();
        $('.mobile-test .text'+$(this).data('text')).css({display:'block'}).siblings().attr('style','');
        $('.process-step-section.modal').show();
        $('.process-step-section.modal .content').eq($('.mobile-test .text'+$(this).data('text')).index()).css({display:'block'}).siblings().attr('style','');
    });
    $('.close').on('click', function (e) { 
        e.preventDefault();
        $('.process-step-section.modal').hide();
    });
    $('.mobile-test span').on('click', function (e) { 
        e.preventDefault();
        $('.process-step-section.modal').show();
        $('.process-step-section.modal .content').eq($(this).index()).css({display:'block'}).siblings().attr('style','');
    });
})(window.jQuery);

