import Views from "./views.js";

class MainActionsView extends Views{
    _parentEl = document.querySelector(".main-actions__grid");
    _errorMessage = "سایت قادر به برقراری ارتباط نمی باشد. لطفا بعدا تلاش کنید 😊"
    _data;

    _generateCard(el) {
        return `
            <li class="main-actions__grid__card col-6 row rounded-1 overflow-hidden py-0 mb-3 mb-md-0">
                <div class="main-actions__grid__card__icon d-block d-sm-none d-md-block col-4 bg-secondary-light d-flex justify-content-center align-items-center">
                    <img class="main-actions__grid__card__icon__img img-fluid my-2" src="./assets/${el.image}" alt="${el.title}"/>
                </div>
                <div class="main-actions__grid__card__text text-dark col-8 col-sm-12 col-md-8 d-flex justify-content-center align-items-center py-3 py-md-2 pr-2">
                    <a class="main-actions__grid__card__text__link" href="#${el.link_hash}">${el.title}</a>
                </div>
            </li>
        `
    }
}


export default new MainActionsView()