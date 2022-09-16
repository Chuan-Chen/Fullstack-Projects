
const ipDiv = document.querySelector("#ip");
const countryDiv = document.querySelector("#country");


async function getAddress(ip){
    let response =  await fetch(`http://ip-api.com/json/${ip}`).then(res => res.json()).then((data)=> {
        countryDiv.textContent = data.country + ", " + data.city + " " + data.regionName;
    });
};

async function getIP(url){
    let response =  await fetch(url).then(res => res.json()).then((data) => {
        getAddress(data.ip);
        ipDiv.textContent = data.ip;
    });
    return response;
}

getIP("https://ip.seeip.org/json");
