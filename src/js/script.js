'use strict';
window.addEventListener('DOMContentLoaded', function(){

    //SLIDER

let slideIndex = 1,
    slidesImg = document.querySelectorAll('.slide-img'),
    slidesAnim = document.querySelectorAll('.slider .slide-img'),
    arrowLeft = document.querySelector('.arrow-button-left'),
    arrowRight = document.querySelector('.arrow-button-right');
    
    showSlides(slideIndex);
    
    function showSlides(n) {
        if (n>slidesImg.length) {
            slideIndex=1;
        }
        if (n<1){
            slideIndex=slidesImg.length;
        }
        slidesImg.forEach((item)=> item.style.display='none');
        slidesImg[slideIndex-1].style.display='block';

    }
    animSlides();
    function animSlides(){
        slidesImg.forEach((item)=> {
            if(item.style.display == 'block'){
                setTimeout(() => {
                    item.classList.remove('anim'); 
                }, 100);
            } else {
                setTimeout(() => {
                    item.classList.add('anim');
                }, 100);
            }
        });

    }

    arrowLeft.addEventListener('click', function(){
        showSlides(slideIndex = slideIndex - 1);
        animSlides();
    });
    arrowRight.addEventListener('click', function(){
        showSlides(slideIndex = slideIndex + 1);
        animSlides();
    });

    //TABS
    let tabs = document.querySelectorAll('.tab1, .tab2, .tab3');
   choose();
    function choose() {
        tabs.forEach((item)=>{
            item.addEventListener('click', function(){
                item.classList.toggle('tab-click');
            });
        });
    }









});

