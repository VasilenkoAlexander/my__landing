//Header fixed
window.onscroll = function showHeader() {
    let header = document.querySelector('.header__container');

    if (window.pageYOffset > 60) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}
//Scroll btn
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

/* SLIDER */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 10,
  });