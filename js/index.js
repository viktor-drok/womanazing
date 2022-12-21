import products from '../products.json' assert {type: 'json'};

const burger = document.querySelector(".hamburger");
const modalNav = document.querySelector('.modal-nav');
const cardsList = document.querySelector('.cards__list');
const captionTotalCount = document.querySelectorAll('.total-count');
const filterList = document.querySelector('.filter__list');
const filterItems = document.querySelectorAll('.filter__item');
const filteredProducts = [...products];

let swiper1 = new Swiper(".cards", {
    slidesPerView: 3,
    spaceBetween: 10,
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

console.log(filterList);
renderCardsList(filteredProducts);
// window.onload = renderCardsList(filteredProducts);
// renderCardsList(filteredProducts);


function filterProducts(cat) {
    cardsList.innerHTML = '';
    const categ = [];
    products.forEach(el => {
        if (el.category === cat) {
            categ.push(el);
        } else if (cat === 'all') {
            categ.push(el);
        }
    });
    filteredProducts.splice(0, filteredProducts.length, ...categ);
    renderCardsList(filteredProducts);
    swiper1.init();
}

function activeFilterButton(e) {
    e.target;
}

filterList.addEventListener('click', (e) => {
    let target = e.target;
    if (e.target.closest('li')) {
        console.log(e.target.id);
        filterItems.forEach(el => el.classList?.remove('filter--active'));

        let active = target.classList.add('filter--active');
        console.log(target);
        filterProducts(e.target.id);
    }
});

console.log(filteredProducts);

function renderCardsList(prop) {
    prop.forEach(el => {
        let card = document.createElement('li');
        card.classList.add('cards__item', 'swiper-slide');
        card.dataset.category = el.category;
        card.dataset.id = el.id;

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
    });
}
captionTotalCount.forEach(el => {
    el.innerText = document.querySelectorAll('.cards__item').length;
});

// filterList.addEventListener('click', (e) => {
//     if (e.target.closest('li').id === 'all') {
//         // e.target.closest('li').classList.add('filter-active');
//         e.target.closest('li').hasAttribute('data-active')
//             ? delete e.target.closest('li').dataset.active
//             : e.target.closest('li').dataset.active = '';
//         document.querySelectorAll('.cards__item').forEach(el => {
//             if (el.hasAttribute('data-category')) {
//                 el.classList.remove('hide');
//             }
//         });
//     } else if (e.target.closest('li').id === 'sweetshot') {
//         e.target.closest('li').hasAttribute('data-active')
//             ? delete e.target.closest('li').dataset.active
//             : e.target.closest('li').dataset.active = '';
//         document.querySelectorAll('.cards__item').forEach(el => {
//             if (el.getAttribute('data-category') !== 'sweetshot') {
//                 el.classList.toggle('hide');
//             }
//         });
//     } else if (e.target.closest('li').id === 't-shirt') {
//         e.target.closest('li').hasAttribute('data-active')
//             ? delete e.target.closest('li').dataset.active
//             : e.target.closest('li').dataset.active = '';
//         document.querySelectorAll('.cards__item').forEach(el => {
//             if (el.getAttribute('data-category') !== 't-shirt') {
//                 el.classList.toggle('hide');
//             }
//         });
//     } else if (e.target.closest('li').id === 'swimsuit') {
//         e.target.closest('li').hasAttribute('data-active')
//             ? delete e.target.closest('li').dataset.active
//             : e.target.closest('li').dataset.active = '';
//         document.querySelectorAll('.cards__item').forEach(el => {
//             if (el.getAttribute('data-category') !== 'swimsuit') {
//                 el.classList.toggle('hide');
//             }
//         });
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


