$(function(){

    $('.header__slider').slick({
       infinite: true,
       fade: true,
       autoplay: true,
       autoplaySpeed: 4000,
       dots: true,
       prevArrow: '<img class="slick-arrow-left" src="img/arrows-left.svg" alt=""</img>',
       nextArrow: '<img class="slick-arrow-right" src="img/arrows-right.svg" alt=""</img>'
    });

    $('.about__slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<img class="about-arrow-left" src="img/about-arrow-left.svg" alt=""</img>',
        nextArrow: '<img class="about-arrow-right" src="img/about-arrow-right.svg" alt=""</img>'
    });

    (function(){
        var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
      touchSupported = ('ontouchstart' in window),
      pointerSupported = ('pointerdown' in window);
      
      skipClickDelay = function(e){
        e.preventDefault();
        e.target.click();
      }
    
            setAriaAttr = function(el, ariaType, newProperty){
            el.setAttribute(ariaType, newProperty);
        };
        setAccordionAria = function(el1, el2, expanded){
            switch(expanded) {
          case "true":
              setAriaAttr(el1, 'aria-expanded', 'true');
              setAriaAttr(el2, 'aria-hidden', 'false');
              break;
          case "false":
              setAriaAttr(el1, 'aria-expanded', 'false');
              setAriaAttr(el2, 'aria-hidden', 'true');
              break;
          default:
                    break;
            }
        };
    //function
    switchAccordion = function(e) {
      console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if(thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
          thisQuestion.classList.toggle('is-collapsed');
          thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');
         
          thisAnswer.classList.toggle('animateIn');
        };
        for (var i=0,len=accordionToggles.length; i<len; i++) {
            if(touchSupported) {
          accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if(pointerSupported){
          accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
      }
    })();

  
});