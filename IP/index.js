
const ipDiv = document.querySelector("#ip");


async function getIP(url){
    let response =  await fetch(url).then(res => res.json()).then((data) => ipDiv.textContent = data.ip);
    return response;
}

getIP("https://ip.seeip.org/json")
