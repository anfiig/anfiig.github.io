const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//________________________________________________________

var nav = document.querySelector('.main-nav');
var close = nav.querySelector('.main-nav__close')

function closeNav(){
    nav.addEventListener('click', function(){
        this.classList.remove('main-nav_active');
        this.classList.add('main-nav_passiv');
        clickNav();
    })
}

function clickNav(){
    nav.addEventListener('click', function(){
        this.classList.add('main-nav_active');
        this.classList.remove('main-nav_passiv');
        closeNav();
    })
}

window.addEventListener('scroll', function(e){
    // console.log(window.scrollY);
    // if (window.scrollY > 2) {
    //     nav.classList.add('main-nav_passiv');
    //     clickNav();
    // }else{
    //     nav.classList.remove('main-nav_passiv');
    // }
    if (window.scrollY == 0) {
        nav.classList.remove('main-nav_passiv');
        nav.classList.remove('main-nav_active');
    }
    else if(!nav.classList.contains('main-nav_active') && !nav.classList.contains('main-nav_passiv')){
        nav.classList.add('main-nav_passiv');
        clickNav();
    }
    else if (nav.classList.contains('main-nav_active')){
        nav.classList.remove('main-nav_passiv');
    }
    else if (nav.classList.contains('main-nav_passiv')){
        nav.classList.remove('main-nav_active');
    }

    });



// var scope = document.querySelectorAll('.scope__menu__item');

// function scopesAktiv(nummer){
//     scope[nummer].addEventListener('click', function(){
//         this.classList.toggle('scope__menu__item_active');
//     })
// }

// for (var i = 0; i < scope.length; i++){
//     scopesAktiv(i);
// }