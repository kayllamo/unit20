async function getRandomDog(){
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    const img = document.querySelector('#dog');
    img.src = res.data.message;
}

async function getDogByBreed(breed){
try {
    const url = `https://dog.ceo/api/breed/${breed}/images/`
    const res = await axios.get(url);
    const img = document.querySelector('#dog');
    img.src = res.data.message;
} catch(e) {
    alert("Breed Not Found")
    getRandomDog();
}
}

const submit = document.querySelector("#searchForm");
submit.addEventListener('submit', function (e){
    const input = document.querySelector("#search");
    e.preventDefault();
    getDogByBreed(input.value);
    input.value = ''
})