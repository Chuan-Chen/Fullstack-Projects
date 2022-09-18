
const ipDiv = document.querySelector("#ip");
const countryDiv = document.querySelector("#country");
const coordDIv = document.querySelector("#coord");
const container = document.querySelector(".containerBK");

async function getWallpaper(){
    let height = window.innerWidth;
    let response = await fetch(`https://picsum.photos/${height}`).then(res => {
        document.body.style.backgroundImage = `url(${res.url})`;
    });
}

async function getAddress(ip){
    let apiURL = `https://ipapi.co/${ip}/json/`;
    let response =  await fetch(apiURL).then(res => res.json()).then((data)=> {
        countryDiv.textContent = data.country_name + ", " + data.city + " " + data.region;
        coordDIv.textContent = `latitude: ${data.latitude}, longitude: ${data.longitude}`
        getWallpaper();
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
