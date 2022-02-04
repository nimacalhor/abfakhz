import Views from "./views.js";

class SecondaryActionView extends Views {
    _parentEl = document.querySelector(".secondary-actions__grid");
    _errorMessage = "متاسفانه سرویس ها در دسترس نمی باشند 🌐";

    _generateCard(el) {
        return `
        <li class="secondary-actions__grid__card col-12 col-md-6 col-lg-4 row">
            <!-- icon ____________________ -->
            <div class="secondary-actions__grid__card__icon col-4 bg-primary d-flex justify-content-center align-items-center">
                <img
                    src="./assets/${el.image}"
                    alt="${el.title}"
                    class="secondary-actions__grid__card__icon__img img-fluid"
                />
            </div>
            <!-- text ____________________ -->
            <div class="secondary-actions__grid__card__body col-8 d-flex justify-content-center align-items-center">
                <h3 class="secondary-actions__grid__card__body__heading">
                    ${el.title}
                </h3>
                <img
                    src="./assets/${el.bg_image}"
                    alt=" عکس بکگراند ${el.title}"
                    class="secondary-actions__grid__card__body__bg"
                />
            </div>
        </li>
        `
    }
}

export default new SecondaryActionView()