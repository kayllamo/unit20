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
        console.log(resultArray)
        let resultUrl = resultArray[randomNum].embed_url;

    const iframe = document.createElement('iframe');
    iframe.src = resultUrl;
    resultsDiv.appendChild(iframe);
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

//<iframe src="https://giphy.com/embed/QrxfVTP2t34WQtpt8o" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>