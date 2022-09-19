import { getAddress } from "./addressSearch ";
import { getWeather} from "./weather";
import { getWindDirection } from "./winddirection";
export function init(domObjects){
    conversion(domObjects);
    search(domObjects);
}

function conversion(domObjects){
    let conversion = domObjects.conversion;
    conversion.addEventListener('click', () => {
        if(conversion.textContent == "Fahrenheit"){
            conversion.dataset.unit = "";
            conversion.textContent = "Celcius";
        }else{
            conversion.dataset.unit = "&temperature_unit=fahrenheit"
            conversion.textContent = "Fahrenheit";
        }
    });
}

async function search(domObjects){
    domObjects.search.addEventListener('keydown', (e) => {searchListenter(e, domObjects)});
}
export async function searchListenter(e, domObjects){
    createCardWithWeather(e, domObjects);
}

async function createCardWithWeather(e, domObjects){
    if(e.keyCode == 13 && domObjects.search.value != ""){
        let address = await getAddress("","","","","",domObjects.search.value);
        //console.log(address)
        let coords = address.features[0].geometry.coordinates;
        //console.log(coords);
        let weather = await getWeather(domObjects.unit, {lat: coords[1], lon: coords[0], time: new Date()});
        let addressObj = {address: address.features[0].properties.display_name}
        createCard(domObjects, weather, addressObj);
    }
}


export function createCard(domObjects, weather, address = {address: "current location"}){
    let content = domObjects.content;
    let cardContent = document.createElement("div");
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle");
    let cardTemp = document.createElement("div");
    let cardWindDirection = document.createElement("div");
    let cardWindSpeed = document.createElement("div");
    console.log(address)
    cardTitle.textContent = address.address;
    domObjects.search.value = "";
    cardTemp.textContent = "Temperature: " + weather.current_weather.temperature;
    cardWindDirection.textContent = "Wind Direction: " + weather.current_weather.winddirection + ":" + getWindDirection(weather.current_weather.winddirection);
    cardWindSpeed.textContent = "Wind Speed: " + weather.current_weather.windspeed + "mph";


    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardTemp);
    cardContent.appendChild(cardWindDirection);
    cardContent.appendChild(cardWindSpeed);


    cardContent.classList.add("card");
    content.appendChild(cardContent);
}