const randomJoke = document.getElementById("randomJoke");
const btn = document.getElementById("btn");

let URL = "https://icanhazdadjoke.com/";


async function getJoke(){  
    let getting = await fetch(URL,{
        headers :{
            accept : "application/json"
        }
    })
    let joke = await getting.json();
    let random_joke = joke.joke;
    randomJoke.innerHTML = random_joke;
}

btn.addEventListener('click',getJoke);

