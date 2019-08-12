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


jQuery(function($) {
    $('#main-navigation ul li').hover(function() {
      $(this).toggleClass('selected');
    });
  
    $('.input-wrapper input').focus(function() {
      $('.input-wrapper').addClass('focused');
    });
  
    $('.input-wrapper input').focusout(function() {
      $('.input-wrapper').removeClass('focused');
    });
  
    $('.ico-navegacao').click(function() {
      $(this).toggleClass('open');
      $('.navigation-wrapper').toggleClass('ativo');
      
    });
  
    $('.toggle').click(function() {
      $(this).toggleClass('closed');
      return false;
    });
  
    $('.servicos-wrapper .servico a.titulo').click(function() {
      $(this)
        .children('i')
        .toggle();
      $(this)
        .parent()
        .children('.conteudo')
        .slideToggle();
      return false;
    });
  
    $('.toggle-link').click(function() {
      $(this).toggleClass('closed');
      return false;
    });
  
    $('.redesocial-toggle').click(function() {
      $(this).toggleClass('closed');
      return false;
    });
  
    $('.btn-assuntos-em-alta').click(function() {
      $(this).toggleClass('closed');
      $(this)
        .parent()
        .next('ul')
        .toggleClass('open');
      return false;
    });


    $('.dropdown-submenu').click(function(e) {
        var texto = $(this).find('a').first().text();
        var target = $('.resp-nav-title').find('span');

        $('.resp-nav-title').css('display', 'block');
        temp = target.text();
        $(target).empty();
        $(target).append(texto);
        e.stopPropagation();
    });

    $('.resp-nav-title').find('i').click(function(e) {
        var target = $(this).closest('.navigation-wrapper').find('.selected').last().text();
        //alert(target);
        $('.resp-nav-title').css('display', 'none');
        e.stopPropagation();
    });
    

  });
  
