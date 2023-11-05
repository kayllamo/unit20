
// async function getData(){
//     const request = await axios.get('https://swapi.dev/api/people')
//     const {next, results} = request.data
//     for (let people of results){
//         console.log(people.name)
//     }
//     const request2 = await axios.get(next)
//     for (let morePeople of request2.data.results){
//         console.log(morePeople.name)
//     }
// }

async function launches(){
    let res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    renderLaunches(res.data)

}

function renderLaunches(launches){
    const ul = document.querySelector("#launches");

    for (let launch of launches){
        
        ul.append(makeResult(launch));
    }
}

function makeResult(launch){
    const newLi = document.createElement('li');
    const mission = document.createElement('b');
    mission.innerText = launch.mission_name;
    newLi.append(mission);
    newLi.innerHTML += ` - ${launch.rocket.rocket_name}`
    return newLi;
}

const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', launches)