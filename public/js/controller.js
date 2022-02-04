import * as model from "./model.js";
import MainActionsView from "./views/mainActionsView.js"
import NewsView from './views/newsView.js';
import GalleryView from './views/galleryView.js';
import SecondaryActionsVIew from "./views/secondaryActionsVIew.js";

const mainActionsController = async function () {
    try {
        await model.loadActions();
        MainActionsView.render(model.state.mainActionCards)
    } catch (err) {
        console.log(err);
        MainActionsView.renderError()
    }
}

const newsController = async function () {
    try {
        await model.loadNews();
        NewsView.render(model.state.newsCards);
        NewsView.activateSlider()
    } catch (err) {
        NewsView.renderError();
    }
}

const galleryController = async function () {
    try {
        await model.loadGallery();
        GalleryView.render(model.state.galleryCards)
    } catch (err) {
        GalleryView.renderError()
    }
}

const secondaryActionsController = async function () {
    try {
        await model.loadSecondaryActions();
        SecondaryActionsVIew.render(model.state.secondaryActionCards)
    } catch (err) {
        SecondaryActionsVIew.renderError();
    }
}

mainActionsController();
newsController();
galleryController();
secondaryActionsController();