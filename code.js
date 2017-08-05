var main = function(){


    
    /* Images Section*/
    $('.img-box').on('click', function(){
        
        $('.img-box').removeClass('imagesBoxSelected');
        $(this).toggleClass('imagesBoxSelected');
        
        var imgSlc = $(this).css('background-image');
        $('.img-s-big').css('background-image', imgSlc);
        
        });
    $('#i-f-back').on('click',function(){
        $('.img-box:first-child').trigger('click');       
    });
    $('#i-back').on('click', function(){
        $('.imagesBoxSelected').prev().trigger('click');
    });
    $('#i-forw').on('click', function(){
        $('.imagesBoxSelected').next().trigger('click');
    });    
    $('#i-f-forw').on('click', function(){
        $('.img-box:last-child').trigger('click');
    });
    
    /* Buttons*/
    $('.btn-main').on('click',function(){
        $('.head-btn').removeClass('head-btn-active');
        $('.btn-main').addClass('head-btn-active');
    });
     $('.btn-inv').on('click',function(){
        $('.head-btn').removeClass('head-btn-active');
        $('.btn-inv').addClass('head-btn-active');
    });
     $('.btn-bio').on('click',function(){
        $('.head-btn').removeClass('head-btn-active');
        $('.btn-bio').addClass('head-btn-active');
    });
     $('.btn-abo').on('click',function(){
        $('.head-btn').removeClass('head-btn-active');
        $('.btn-abo').addClass('head-btn-active');
    });   
}

$(document).ready(main);



