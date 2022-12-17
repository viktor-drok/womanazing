import products from '../products.json' assert {type: 'json'};

const burger = document.querySelector(".hamburger");
const modalNav = document.querySelector('.modal-nav');
const cardsList = document.querySelector('.cards__list');
const captionTotalCount = document.querySelector('.total-count');
const captionShowCount = document.querySelector('.show-count');
const filterList = document.querySelector('.filter__list');

console.log(filterList);
renderCardsList(products);

function renderCardsList(prop) {
    console.log(prop);
    prop.forEach(el => {
        let card = document.createElement('li');
        card.classList.add('cards__item', 'swiper-slide');
        card.dataset.category = el.category;

        card.innerHTML = /*html*/`
            <div class="cards__item-img">
            <img src=${el.urlImg} alt=${el.name}>
            </div>
            
            <div class="cards__item-title">
            ${el.name}
            </div>
            
            <div class="cards__item-price">
            $${el.price.priceNow}
            </div>
            `;
        cardsList.append(card);
        // console.log(card.getAttribute('category'));
    });
}
captionTotalCount.innerText = document.querySelectorAll('.cards__item').length;

// document.querySelector('.filter__list').addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.closest('.filter__item').id === null) {
//         return false;
//     } else {
//         console.log(e.target.closest('li').id);
//         renderCardsList(products);
//     }
// });


burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    burger.toggleAttribute("is-active");

    if (burger.hasAttribute('is-active')) {
        modalNav.style.transform = 'translateY(0)';
        modalNav.style.zIndex = '2';
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
        el: ".swiper-pagination.pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        989: {
            slidesPerView: 3
        }
    }
});


