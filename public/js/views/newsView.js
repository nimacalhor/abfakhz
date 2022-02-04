import Views from "./views.js"

class NewsView extends Views {
    _parentEl = document.querySelector(".news__slider__list")
    _errorMessage = "سایت قادر به برقراری ارتباط نمی باشد. لطفا بعدا تلاش کنید 😊"

    activateSlider() {
        new Swiper(".swiper", {
            slidesPerView: "auto",
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

    _generateCard(el) {
        return `
            <li class="news__slider__list__card bg-primary swiper-slide">
                <div class="news__slider__list__card__image">
                    <img
                        src="./assets/${el.image}"
                        alt="${el.title}"
                        class="news__slider__list__card__image__img"
                    />
                </div>
                <div class="news__slider__list__card__body pt-3 px-3">
                    <h3 class="news__slider__list__card__body__heading mb-2">
                        ${el.title}
                    </h3>
                    <p class="news__slider__list__card__body__text">
                        ${el.body}
                    </p>
                    <div
                        class="news__slider__list__card__body__info d-flex justify-content-between px-3"
                    >
                        <i
                        class="news__slider__list__card__body__info__icon bi bi-calendar"
                        ></i
                        ><span class="news__slider__list__card__body__info__date">
                            ${el.date}
                        </span>
                    </div>
                </div>
            </li>
        `
    }
}

export default new NewsView()