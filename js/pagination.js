export function pagination() {
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