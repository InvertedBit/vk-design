
$(function() {
    
    
    $('.uk-card').on('click', function(e) {
        if ($(this).hasClass('lightbox')) {
            UIkit.lightbox('.gallery-container').show($(this).parent().index());

        } else {
            let cardLink = $(this).find('a.card-link').attr('href');
            if (cardLink !== undefined) {
                window.location = cardLink;
            }
        }
        return false;
    });

});