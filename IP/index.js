
const ipDiv = document.querySelector("#ip");
const countryDiv = document.querySelector("#country");


async function getAddress(ip){
    let apiURL = `https://ipapi.co/${ip}/json/`;
    let response =  await fetch(apiURL).then(res => res.json()).then((data)=> {
        countryDiv.textContent = data.country_name + ", " + data.city + " " + data.region;
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
