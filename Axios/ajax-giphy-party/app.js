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

    const img = document.createElement('img');
    img.src = resultUrl;
    resultsDiv.appendChild(img);
    console.log(results)
    return resultsDiv;

}


//Grabs user search term
const form = document.querySelector("#form");

form.addEventListener('submit', function (e){
    const input = document.querySelector("#search");
    e.preventDefault();
    getSearch(input.value);
    input.value = ''
})


//Clears Results Div
let resultsDiv = document.querySelector('#results');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', function (e){
    e.preventDefault();
    resultsDiv.innerHTML = '';
})