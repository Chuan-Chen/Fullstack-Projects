import { getAddress } from "./addressSearch ";
import { getWeather} from "./weather";
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
    domObjects.search.addEventListener('keydown', async (e)=>{
        if(e.keyCode == 13 && domObjects.search.value != ""){
            
            let address = await getAddress("","","","","",domObjects.search.value);
            //console.log(address)
            let coords = address.features[0].geometry.coordinates;
            //console.log(coords);
            let weather = await getWeather(domObjects.unit, {lat: coords[1], lon: coords[0], time: new Date()});
            //console.log(weather)
            createCard(domObjects, weather);
        }
    });
}


export function createCard(domObjects, weather){
    let content = domObjects.content;
    let cardContent = document.createElement("div");
    let cardContentTitle = document.createElement("div");
    let cardUnit = document.createElement("div");
    let cardTemp = document.createElement("div");
    let cardWindDirection = document.createElement("div");
    let cardWindSpeed = document.createElement("div");
    
    console.log(weather.currentweather)
/*
    cardContentTitle.textContent = domObjects.search.value;
    domObjects.search.value = "";
    cardUnit.textContent = domObjects.unit.textContent;
    cardTemp.textContent = weather.currentWeather.temperature;
    cardWindDirection.textContent = weather.currentWeather.winddirection;
    cardWindSpeed.textContent = weather.currentWeather.windspeed;

    */
    cardContent.appendChild(cardContentTitle);
    cardContent.appendChild(cardUnit);
    cardContent.appendChild(cardTemp);
    cardContent.appendChild(cardWindDirection);
    cardContent.appendChild(cardWindSpeed);


    cardContent.classList.add("card");
    content.appendChild(cardContent);
}