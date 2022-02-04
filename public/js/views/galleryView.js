import Views from "./views.js";

class GalleryView extends Views {
    _parentEl = document.querySelector(".gallery__list");
    _errorMessage = "سایت قادر به برقراری ارتباط نمی باشد. لطفا بعدا تلاش کنید 😊";

    _generateCard(el){
        return `
            <li class="gallery__list__item mb-4 row rounded-3">
                <div class="gallery__list__item__body col-8 text-end p-2">
                    <p class="gallery__list__item__body__text">
                        ${el.title}
                    </p>
                </div>
                <div class="gallery__list__item__image col-4 h-100 p-0">
                    <img
                        src="./assets/${el.image}"
                        alt="${el.title}"
                        class="gallery__list__item__image__img"
                    />
                </div>
            </li>
        `
    }
}

export default new GalleryView();