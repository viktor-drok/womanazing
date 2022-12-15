const burger = document.querySelector(".hamburger");
const modalNav = document.querySelector('.modal-nav');

burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    burger.toggleAttribute("is-active");

    if (burger.hasAttribute('is-active')) {
        modalNav.style.transform = 'translateY(0)';
    }
    else {
        modalNav.style.transform = 'translateY(-101%)';
    }
});


var swiper1 = new Swiper(".cards", {
    slidesPerView: 3,
    grid: {
        rows: 3,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});