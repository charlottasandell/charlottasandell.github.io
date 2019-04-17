$("document").ready(function(){
   $('[data-type ="vitamin"]').css("background-color","pink");
   $('[data-type ="proteinbar"]').css("background-color","darksalmon");
   $('[data-type ="mineralwater"]').css("background-color","white");
   $('.product-item').css('cursor', 'pointer');
})  

$("document").on('click', 'a[href^=".headline"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/*
$('body').append($'<section id="history-clone">hello</section>');    
$('#history').clone().appendTo( '#history-clone' );
*/

var x = $('#history').clone().prop({'id': 'history-clone'})
$('#history').after(x)
$('#history-clone').css("background-color", "pink");
$(x).text('This is the new id called history-clone which should have the background color #9e9e9e but however I chose pink');
