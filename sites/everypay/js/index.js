const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

//____________________________________________

const langBtns = document.querySelectorAll('.header__language__btn');

if (langBtns.length > 0){
    let ruBtn = langBtns[0];
    let enBtn = langBtns[1];

    function eventForRu (){
        ruBtn.addEventListener('click', function(){
            this.classList.add('header__language__btn_active');
            enBtn.classList.remove('header__language__btn_active');
        });
    }
    function eventForEn () {    
            enBtn.addEventListener('click', function(){
                this.classList.add('header__language__btn_active');
                ruBtn.classList.remove('header__language__btn_active');
            });
    }
    eventForEn();
    eventForRu();
}

//____________________________________________

const forms = document.querySelectorAll('.form');

function eventForForm(form){
  form.querySelector('.form__input').value = '';
  form.querySelector('.form__input').setAttribute('disabled', 'disabled');
  form.classList.add('form_done');
}

for(let i=0; i<forms.length; i++){
  forms[i].addEventListener('submit', function(e){
    e.preventDefault();
    eventForForm(forms[i]);
  });
}

// $( "a" ).click(function( event ) {
//   event.preventDefault();
// });

//____________________________________________

const mainForm = document.querySelector('.footer__form');

function eventForMainForm(form){
  form.classList.add('footer__form_passiv');
  form.querySelector('.footer__form-done').classList.add('footer__form-done_active')
}

mainForm.addEventListener('submit', function(e){
  e.preventDefault();
  eventForMainForm(mainForm);
});

//____________________________________________

let burgerBtn = document.querySelector('.header__burger');
let burgerHeader = document.querySelector('.header');
let burgerBlock = document.querySelector('.header__burger__nav');
let burgerLinks = burgerBlock.querySelectorAll('.header__burger__nav__list__item');

for (let i=0; i<burgerLinks.length; i++){
  burgerLinks[i].addEventListener('click', function(){
    burgerBtn.classList.remove('header__burger_active');
    document.querySelector('body').classList.remove('stop-scrolling');
    burgerHeader.classList.remove('header_active');
    burgerBlock.classList.remove('header__burger__nav_active');
  });
}

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('header__burger_active');
  burgerHeader.classList.toggle('header_active');
  burgerBlock.classList.toggle('header__burger__nav_active');
  document.querySelector('body').classList.toggle('stop-scrolling');
  // document.querySelector('body').bind('touchmove', function(e){e.preventDefault()});
});