export function renderCard(selectedCard) {
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