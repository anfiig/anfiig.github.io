$(document).ready(function(){
    $('.pageup').fadeOut();
    $('.burger').fadeOut();

    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('.burger').fadeIn('slow');
            $('.burger-content').fadeIn('slow');
        } else {
            $('.burger').fadeOut('slow');
            // $('.burger-content').fadeOut('slow');
            document.querySelector('.burger').classList.remove('burger-active');
            document.querySelector('.burger-content').classList.remove('burger-content-active');
        }
    });

    $("a").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    document.querySelector('.burger').addEventListener('click', function(){
        this.classList.toggle('burger-active')
        document.querySelector('.burger-content').classList.toggle('burger-content-active')
    })

    document.addEventListener('keydown', function(e){
        var keyCode = e.keyCode;
        if (keyCode === 27){
            document.querySelector('.burger-content').classList.remove('burger-content-active');
            document.querySelector('.burger').classList.remove('burger-active');
        }
    })

    var modal = document.querySelector('.burger-content');
    var modalLink = modal.querySelectorAll('a');

    for(var i = 0; i < modalLink.length; i++){
        modalLink[i].addEventListener('click', function(){
            document.querySelector('.burger').classList.remove('burger-active');
            document.querySelector('.burger-content').classList.remove('burger-content-active');
        })
    }
    // modal.querySelector('a').addEventListener('click', function(){
    //     document.querySelector('.burger').classList.remove('burger-active');
    //     document.querySelector('.burger-content').classList.remove('burger-content-active');
    // })

    new WOW().init();
});