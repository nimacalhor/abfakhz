import { TIMEOUT_SEC } from "./config.js"

const timeOut = async function (sec) {
    return new Promise((_, reject) => 
        setTimeout(() => reject(new Error("request took a long time")), sec * 1000)
    )
}

export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(url), timeOut(TIMEOUT_SEC)]);
        if (!res.ok) throw new Error(res.status)
        return await res.json();
    } catch (err) {
        throw err;
    }
}
