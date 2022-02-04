export const getJSON = async function(url){
    try {
        const res = await fetch(url);
        if(!res.ok) throw new Error(res.status)
        return await res.json();
    } catch (err) {
        console.log(err)
        throw err;
    }
}
