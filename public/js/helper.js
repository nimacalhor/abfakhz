const makeActionMarkup = data => `
    <li
        class="main-actions__grid__card col-6 row rounded-1 overflow-hidden py-0 mb-3 mb-md-0"
    >
        <div
        class="main-actions__grid__card__icon d-block d-sm-none d-md-block col-4 bg-secondary-light d-flex justify-content-center align-items-center"
        >
            <img
                src="./assets/${data.image}"
                alt="${data.title}"
                class="main-actions__grid__card__icon__img img-fluid my-2"
            />
        </div>
        <div
        class="main-actions__grid__card__text col-8 col-sm-12 col-md-8 d-flex justify-content-center align-items-center py-3 py-md-2 pr-2"
        >
            <a href="./action.html#${data.link_hash}" class="main-actions__grid__card__text__link">
               ${data.title}
            </a>
        </div>
    </li>
`;

export {makeActionMarkup};