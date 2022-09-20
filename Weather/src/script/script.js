import {init, createCard} from './EvenHandler';
import { getAddress, reverseAddress } from './addressSearch ';
import {Clock} from './clock';
import {getCoords} from './coordinate'

import { getWeather } from './weather';
const search = document.querySelector("#search");
const time = document.querySelector(".time");
const content = document.querySelector(".content");
const unit = document.querySelector(".conversion");
const domObjects = {conversion: unit, content: content, search: search, unit: unit};
//getWeather(unit).then(data => console.log(data));

//getAddress("", "", "", "", "", "11364").then(data => console.log(data.features[0].geometry.coordinates));


init(domObjects);

(async () => {
    let coords = await getCoords();
    let weather = await getWeather(unit, coords);
    //let address = await reverseAddress(coords.lat, coords.lon);
    coords.address = "Current Location";
    createCard(domObjects, weather, coords);
    
})()

const clock = new Clock(time, new Date());



