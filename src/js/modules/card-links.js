$(function() {
    
    $('.uk-card').on('click', function(e) {
        let cardLink = $(this).find('a.card-link').attr('href');
        if (cardLink !== undefined) {
            window.location = cardLink;
        }
        return false;
    });

});