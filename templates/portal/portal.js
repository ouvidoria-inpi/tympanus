jQuery(function($) {
    $('.mobile-header .accessibility .br-button.is-primary').on('click',function(){
        $('.mobile-header .br-search').toggleClass('d-none');
    })

    $( "#search" ).on('focus',function() { 
        $('.col-acessibilidade, .logo').toggleClass('d-none')
    });
    $( "#search" ).on('blur',function() { 
        $('.col-acessibilidade, .logo').toggleClass('d-none')
    });

    
    $('.clear-button').on('click',function(){
        $('#search').val('');
        $('.clear-button').addClass('d-none');
    });

    $('#search').on('keyup',function(){
        if($('#search').val().length>0){
            $('.clear-button').removeClass('d-none')
                
        }else{
            $('.clear-button').addClass('d-none');
        }
    })

  
if ($(window).width() > 1024){
    $("#portal-footer .rodape-navigation li.plain ul").show();
} else {
    $("#portal-footer .rodape-navigation li.plain ul").hide();
    $("#portal-footer .rodape-navigation li.plain").removeClass("opened");
}

$(window).on('resize', function(){
    if ($(window).width() > 1024){
        $("#portal-footer .rodape-navigation li.plain ul").show();
    } else {
        $("#portal-footer .rodape-navigation li.plain ul").hide();
        $("#portal-footer .rodape-navigation li.plain").removeClass("opened");
    }
});

$("#portal-footer .rodape-navigation li.plain").on('click', function(){
    if ($(window).width() <= 1024){
        $(this).toggleClass("opened");
        $(this).find("ul").toggle();
    }
});

});
