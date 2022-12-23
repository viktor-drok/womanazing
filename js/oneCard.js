export function renderCard(selectedCard) {
    const { urlImg, price, name, size, color } = selectedCard;

    const filterList = document.querySelector('.filter__list');
    const breadcrumb = document.querySelector('.breadcrumb');
    const pageTitle = document.querySelector('.page__title');

    function breadcrumbOneCard() {
        return (
            `
                <li class="breadcrumb-item"><a href="/">Главная</a></li>
                <li class="breadcrumb-item"><a href="/">Магазин</a></li>
                <li class="breadcrumb-item active" aria-current="page">${name}</li>
            `
        );
    }

    pageTitle.innerText = name;

    breadcrumb.innerHTML = breadcrumbOneCard();
    breadcrumb.style.marginBottom = '0px';

    const sizeOption = size.map(el => (` <li class="card-size-item">${el}</li> `));

    const colorOption = color.map(el => (` <li class="card-color-item" style='background: ${el}'></li> `));

    filterList.style.display = 'none';
    return (/*html*/`
    <div class="container one-card-content">
        <div class="card-img">
            <img src='${urlImg}' alt=''>
        </div>

        <div class="card-descr">
            <div class="card-price">$${price.priceNow}</div>

            <div class="card-size">
                <h3 class="card-size-title">Выберите размер</h3>

                <ul class="card-size-option">${sizeOption.join('')}</ul>
            </div>

            <div class="card-color">
                <h3 class="card-color-title">Выберите цвет</h3>

                <ul class="card-color-option">${colorOption.join('')}</ul>
            </div>

            <div class="goods">
                <div class="picked-goods">1</div>
                <button type="button" class="add-to-cart">Добавить в корзину</button>
            </div>
        </div>
    </div>
    `
    );
};