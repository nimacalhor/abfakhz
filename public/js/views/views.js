export default class Views {
    _data;

    _empty() {
        this._parentEl.innerHTML = ""
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="w-100 h-100 d-flex justify-content-center align-items-center">
                <p class="display-6 fw-bolder">${message}</p>
            </div>
        `;

        this._empty();
        this._parentEl.insertAdjacentHTML("afterbegin", markup)
    }

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        // data will be passed to it by { controller.js } after the data had been fetched
        this._data = data;
        const markup = this._generateMarkup(this._data);
        this._empty();
        this._parentEl.insertAdjacentHTML("afterbegin", markup)
    }

    _generateMarkup() {
        return this._data.map(this._generateCard).join("");
    }
}