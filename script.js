/*const myPromise = new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.com/products/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
});

myPromise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});*/

function fetchUser(){ 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userData = {username:'Wassim', email:'wassim.mourali@rose-blanche.com'};
            resolve(userData);
        },1000)
    })
};

function fetchPost(username){
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        const userPost = [{id:'1', title:'post 1'},{id:'2', title:'post 2'}];
        resolve(userPost);
    },3000)
)};
fetchUser().then(userData => {
    console.log("userData:",userData);
    return fetchPost(userData.username);
}).then(userPost => {
    console.log("userpost:",userPost);
}).catch(error => {
    console.error(error);
});
