import $ from 'jquery';

$(window).on('scroll', function() {
    var scrollTop : any = $(this).scrollTop();
    var scaleFactor = 1 + scrollTop / 1000; // Adjust scaling factor as needed

    $('#o').css('font-size', (32 * scaleFactor) + 'em');
    $('#c, #d, #e, #r').css('font-size', (32 / scaleFactor) + 'em');
});

