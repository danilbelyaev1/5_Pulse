'use strict';
window.addEventListener('DOMContentLoaded', function () {

    //SLIDER

    let slideIndex = 1,
        slidesImg = document.querySelectorAll('.slide-img'),
        slidesAnim = document.querySelectorAll('.slider .slide-img'),
        arrowLeft = document.querySelector('.arrow-button-left'),
        arrowRight = document.querySelector('.arrow-button-right');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slidesImg.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slidesImg.length;
        }
        slidesImg.forEach((item) => item.style.display = 'none');
        slidesImg[slideIndex - 1].style.display = 'block';

    }
    animSlides();

    function animSlides() {
        slidesImg.forEach((item) => {
            if (item.style.display == 'block') {
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

    arrowLeft.addEventListener('click', function () {
        showSlides(slideIndex = slideIndex - 1);
        animSlides();
    });
    arrowRight.addEventListener('click', function () {
        showSlides(slideIndex = slideIndex + 1);
        animSlides();
    });

    //TABS
    let tabs = document.querySelectorAll('.tab1, .tab2, .tab3');
    choose();

    function choose() {
        tabs.forEach((item) => {
            item.addEventListener('click', function () {
                item.classList.toggle('tab-click');
            });
        });
    }

    //ПОДРОБНЕЕ И НАЗАД
    let showBtn = document.querySelectorAll('.more');
    let show = document.querySelectorAll('.show');
    let hide = document.querySelectorAll('.hide');
    let hideBtn = document.querySelectorAll('.back-btn');
    moreBtn();

    function moreBtn() {
        showBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                show[i].style.display = 'none';
                hide[i].style.display = 'block';
            });
        });
    }
    backBtn();

    function backBtn() {
        hideBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                show[i].style.display = 'block';
                hide[i].style.display = 'none';
            });
        });
    }

    //СОРТИРОВКА ПО ТАБАМ
    let tab1 = document.querySelector('.tab1');
    let tab2 = document.querySelector('.tab2');
    let tab3 = document.querySelector('.tab3');
    let cards = document.querySelectorAll('.card');

        let array = [];
        tabs.forEach((item)=>{
            item.addEventListener('click',()=>{
                let tabData = item.getAttribute('data-category');

                if (item.classList.contains('tab-click'))
                    {
                        array.push(tabData);
                    } else {
                        if (array.indexOf(tabData) != -1)   {
                            array.splice(array.indexOf(tabData), 1);
                        }
                    }
                    console.log(array);
                cards.forEach((item1)=>{
                    let cardAttribute = item1.getAttribute('data-category');
                    if (array.length != 0)  {
                        if (array.indexOf(cardAttribute) == -1) {
                            item1.style.display = 'none';
                        } else {
                            item1.style.display = 'block';
                        }
                    } else {
                        item1.style.display = 'block';
                    }
                });
            });
        });
    //    function filter () {
    //     tabs.forEach((item)=>{
    //         item.addEventListener('click',function(){
    //             if (!item.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='block';
    //                 });
    //             }
    //             if (tab1.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //                 cards[0].style.display='block';
    //                 cards[1].style.display='block';
    //             } 
    //             if (tab2.classList.contains('tab-click')) {
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //                 cards[2].style.display='block';
    //                 cards[3].style.display='block';
    //             } 
    //             if (tab3.classList.contains('tab-click')) {
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //                 cards[4].style.display='block';
    //                 cards[5].style.display='block';
    //             }
    //             if (tab1.classList.contains('tab-click') && tab2.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //                 cards[0].style.display='block';
    //                 cards[1].style.display='block';
    //                 cards[2].style.display='block';
    //                 cards[3].style.display='block';
    //             }
    //             if (tab2.classList.contains('tab-click') && tab3.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //                 cards[2].style.display='block';
    //                 cards[3].style.display='block';
    //                 cards[4].style.display='block';
    //                 cards[5].style.display='block';
    //             }
    //             if (tab1.classList.contains('tab-click') && tab3.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //                 cards[0].style.display='block';
    //                 cards[1].style.display='block';
    //                 cards[4].style.display='block';
    //                 cards[5].style.display='block';
    //             }
    //             if (tab1.classList.contains('tab-click') && tab2.classList.contains('tab-click') && tab3.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='block';
    //                 });
    //             }

    //         });
    //     });
    // }

    // function filter () {
    //     tabs.forEach((item)=>{
    //         item.addEventListener('click',function(){
    //             if (item.classList.contains('tab-click')){
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='none';
    //                 });
    //             } else {
    //                 cards.forEach((item1)=>{
    //                     item1.style.display='block';
    //                 });
    //             }
    //         });
    //     });
    // }

    


    // tabOne();
    // tabTwo();
    // function tabOne () {
    //     tab1.addEventListener('click',()=>{
    //         if(tab1.classList.contains('tab-click')) {
    //             cards.forEach((item, i)=>{
    //                 item.style.display='none';
    //             });
    //             cards[0].style.display='block';
    //             cards[1].style.display='block';
    //         } else {
    //             cards.forEach((item)=>{
    //             item.style.display='block';
    //             });
    //         }
    //     });
    // }
    // function tabTwo () {
    //     tab2.addEventListener('click',()=>{
    //         if(tab2.classList.contains('tab-click')) {
    //             cards.forEach((item, i)=>{
    //                 item.style.display='none';
    //             });
    //             cards[2].style.display='block';
    //             cards[3].style.display='block';
    //         } else {
    //             cards.forEach((item)=>{
    //             item.style.display='block';
    //             });
    //         }
    //     });
    // }

});