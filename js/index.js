import products from '../products.json' assert {type: 'json'};

const burger = document.querySelector(".hamburger");
const modalNav = document.querySelector('.modal-nav');
const cardsList = document.querySelector('.cards__list');
const captionTotalCount = document.querySelectorAll('.total-count');
const filterList = document.querySelector('.filter__list');
const allCardsSection = document.querySelector('.cards');
const filterItems = document.querySelectorAll('.filter__item');
const paginationBox = document.getElementById('pagination');

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
const renderedCards = renderCardsList(filteredProducts);

// filterList.addEventListener('click', (e) => {
//     if (e.target.closest('li').id === 'all') {
//         console.log(e.target.closest('li').id);
//         allCardsSection.innerHTML = /*html*/`
//         `;
//         // renderCardsList(filteredProducts)
//     }
// });

console.log(filterList);


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
}

document.getElementById('all').addEventListener('click', () => {
    pagination();
});

function activeFilterButton(e) {
    e.target;
}

filterList?.addEventListener('click', (e) => {
    let target = e.target;
    if (e.target.closest('li')) {
        console.log(e.target.id);
        filterItems.forEach(el => el.classList?.remove('filter--active'));

        target.classList.add('filter--active');
        console.log(target);
        console.log(e.currentTarget);
        filterProducts(e.target.id);
    }
});

console.log(filteredProducts);

cardsList.addEventListener('click', openCard);
let selectedCard = {};

function openCard(e) {
    if (e.target.closest('li')) {
        let itemId = e.target.closest('li').dataset.id;
        products.forEach(el => {
            if (el.id === itemId) {
                return selectedCard = el;
            };
        });

        allCardsSection.innerHTML = renderCard(selectedCard);
    }
}

function renderCardsList(prop) {
    prop.forEach(el => {

        let card = document.createElement('li');
        card.classList.add('cards__item', 'swiper-slide');
        card.dataset.category = el.category;
        card.dataset.id = el.id;
        card.innerHTML = /*html*/`
            <div>
                <div class="cards__item-img">
                    <img class="image" src=${el.urlImg} alt=${el.name}>
                </div>
            </div>

            <div class="cards__item-title">
                ${el.name}
            </div>
            
            <div class="cards__item-price">
               $${el.price.priceNow}
            </div>
            `;
        cardsList?.append(card);
    });
}
captionTotalCount.forEach(el => {
    el.innerText = document.querySelectorAll('.cards__item').length;
});

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

// card page

let main = document.getElementById('main');
console.log(main);
console.log(products);

function renderSize(selectedCard) {
    const { size } = selectedCard;
    return ( /* html */`
    <li>sfasgag</li>
    `);
};

function renderCard(selectedCard) {
    const { urlImg, price, name, size, color } = selectedCard;

    const sizeOption = size.map(el => (` <li class="card-size-item">${el}</li> `));
    const colorOption = color.map(el => (` <li class="card-color-item" style='background: ${el}'></li> `));

    console.log(sizeOption.join(''));
    return (/*html*/`
    <div class="container">
        <div class="card-img">
            <img src='${urlImg}' alt=''>
        </div>

        <div class="card-descr">
            <div class="card-price">${price.priceNow}</div>

            <div class="card-size">
                <h3 class="card-size-title">Выберите размер</h3>

                <ul class="card-size-option">${sizeOption.join('')}</ul>
            </div>

            <div class="card-color">
                <h3 class="card-color-title">Выберите цвет</h3>

                <ul class="card-color-option">${colorOption.join('')}</ul>
            </div>

            <div class="picked-goods">${name}</div>
            <button type="button" class="add-to-cart"></button>
        </div>
    </div>
    `
    );
};




function pagination() {
    return ( /* html */`
        <svg class="next-page swiper-button-prev">
            <use xlink:href="./images/svg-icons/sprites.svg#arrow-right-black"></use>
        </svg>

        <div class="pagination swiper-pagination"></div>

        <svg class="next-page swiper-button-next">
            <use xlink:href="./images/svg-icons/sprites.svg#arrow-right-black"></use>
        </svg>
    `
    );
}

paginationBox.innerHTML = pagination();
swiper1.pagination.init();
swiper1.navigation.init();
// main.innerHTML = renderCard();