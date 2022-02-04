import { getJSON } from "./helper.js";
import { BASE_URL } from "./config.js";

export const state = {
    mainActionCards: [],
    newsCards: [],
    galleryCards: [],
    secondaryActionCards: []
}

export const loadActions = async function () {
    try {
        const data = await getJSON(`${BASE_URL}actions`);
        state.mainActionCards = data;
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export const loadNews = async function () {
    try {
        const data = await getJSON(`${BASE_URL}news`);
        state.newsCards = data
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export const loadGallery = async function () {
    try {
        const data = await getJSON(`${BASE_URL}gallery`);
        state.galleryCards = data
    } catch (err) {
        console.log(err)
        throw err;
    }
}

export const loadSecondaryActions = async function () {
    try {
        const data = await getJSON(`${BASE_URL}secondary-actions`);
        state.secondaryActionCards = data
    } catch (err) {
        console.log(err)
        throw err;
    }
}
