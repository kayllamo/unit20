//https://hackorsnoozev3.docs.apiary.io/#introduction/authentication
//https://hack-or-snooze-v3.herokuapp.com/users

async function getUsers(token){
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', {params: {token}});
    console.log(res)
    
}



async function createUser(username, password, name){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {user:{name, username, password}});
    console.log(res)
   
}


async function login(username, password){
     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user:{username, password}});
     console.log(res)
    return res.data.token;
 }


async function getAuthUsers(){
    const token = await login('bear', 'beeaaaarrry');
    getUsers(token);
}


async function createStory(){
    const token = await login('bear', 'beeaaaarrry');
    const newStory = {
        token,
        story: {
            author: 'bear',
            title: 'buuureaaaryy',
            url: 'https://bear.com'
        }
    }
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
    console.log(res)
}

createStory();
