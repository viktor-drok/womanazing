import products from '../products.json' assert {type: 'json'};
import { pagination } from './pagination.js';
import { swiper1 } from './swiper.js';
import { Burger } from './burger.js';
import { renderCard } from './oneCard.js';

const cardsList = document.querySelector('.cards__list');
const captionTotalCount = document.querySelectorAll('.total-count');
const filterList = document.querySelector('.filter__list');
const allCardsSection = document.querySelector('.cards');
const filterItems = document.querySelectorAll('.filter__item');
const paginationBox = document.getElementById('pagination');

const filteredProducts = [...products];

renderCardsList(filteredProducts);

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

filterList?.addEventListener('click', (e) => {
    let target = e.target;
    if (e.target.closest('li')) {
        filterItems.forEach(el => el.classList?.remove('filter--active'));

        target.classList.add('filter--active');
        filterProducts(e.target.id);
    }
});

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

paginationBox.innerHTML = pagination();
swiper1.pagination.init();
swiper1.navigation.init();

export * as Index from './index.js';