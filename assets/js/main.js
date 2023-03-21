(function($) {
    $('svg .path a').on('mouseenter', function (e) { 
        e.preventDefault();
        $('.mobile-test .text'+$(this).data('text')).css({display:'block'}).addClass('active').siblings().attr('style','').removeClass('active');
    });
    $('svg .path a').on('mouseleave', function (e) { 
        e.preventDefault();
        $('.mobile-test .text'+$(this).data('text')).removeClass('active');
    });
    $('.mobile-test span').on('mouseenter', function (e) { 
        e.preventDefault();
        $('svg .path a[data-text="'+$(this).data('text')+'"]').addClass('active');
    });
    $('.mobile-test span').on('mouseleave', function (e) { 
        e.preventDefault();
        $('svg .path a[data-text="'+$(this).data('text')+'"]').removeClass('active');
    });
    $('svg .path a').on('click', function (e) {
        e.preventDefault();
        $('.mobile-test .text'+$(this).data('text')).css({display:'block'}).siblings().attr('style','');
        $('.process-step-section.modal').fadeIn(300);
        $('.process-step-section.modal .content').eq($('.mobile-test .text'+$(this).data('text')).index()).css({display:'block'}).siblings().attr('style','');
    });
    $('.close').on('click', function (e) { 
        e.preventDefault();
        $('.process-step-section.modal').fadeOut(300);
    });
    $('.mobile-test span').on('click', function (e) { 
        e.preventDefault();
        $('.process-step-section.modal').fadeIn(300);
        $('.process-step-section.modal .content').eq($(this).index()).css({display:'block'}).siblings().attr('style','');
    });
})(window.jQuery);

