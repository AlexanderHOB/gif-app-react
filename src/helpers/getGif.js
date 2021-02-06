export const fetchGifts = async (category)=>{
    const key = 'ei7TkabY87g3kxvxLekZfqTLAeLlDErr';
    const limit = "6";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${key}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(({id,title,images})=>{
        return {
            id,
            title,
            url:images?.downsized_medium.url
        }
    })
    return gifs;
}