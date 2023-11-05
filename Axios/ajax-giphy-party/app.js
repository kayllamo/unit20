//https://developers.giphy.com/docs/api/
// API key -- h0WxauJQcSMBcDiglEtlQlvK9icSyPU8


// GET giphy using search term
async function getSearch(term){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {
        q: term,
        api_key: 'h0WxauJQcSMBcDiglEtlQlvK9icSyPU8',
    }})

        let resultArray = res.data.data; 
        let randomNum = Math.floor(Math.random() * resultArray.length);
        let resultUrl = resultArray[randomNum].url;

    const results = document.querySelector('#results');
    const img = document.createElement('img');
    img.src = resultUrl;
    img.append(results);

}


//Grabs user search term
const form = document.querySelector("#form");

form.addEventListener('submit', function (e){
    const input = document.querySelector("#search");
    e.preventDefault();
    getSearch(input.value);
    input.value = ''
})