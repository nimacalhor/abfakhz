const state = {
    mainActionCards: []
}

const loadActions = async function () {
    try {
        const res = await fetch("http://localhost:3000/actions");
        const data = await res.json();

        state.mainActionCards = data;
    } catch (err) {
        console.log(err)
        throw err;
    }
}