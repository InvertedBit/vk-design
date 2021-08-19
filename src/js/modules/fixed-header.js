$(function() {


var isHeaderShown = false;

function showHeader() {
    if (isHeaderShown) {
        return;
    }
    if ($('#fixed-header').css('display') == 'none') {
        $('#fixed-header').css('display', 'block');
    }
    $('#fixed-header').removeClass('hidden');
    isHeaderShown = true;
}

function hideHeader() {
    if (!isHeaderShown) {
        return;
    }
    $('#fixed-header').addClass('hidden');
    isHeaderShown = false;
}

    //$('.fixed-header').animate({top: -100}, 250);
    $(window).scroll(function(e){
        if ($(document).scrollTop() >= 500) {
            showHeader();
        } else {
            hideHeader();
        }
    });
});