import {init, createCard} from './EvenHandler';
import { getAddress } from './addressSearch ';
import {Clock} from './clock';
import {getCoords} from './coordinate'

import { getWeather } from './weather';
const search = document.querySelector("#search");
const time = document.querySelector(".time");
const content = document.querySelector(".content");
const unit = document.querySelector(".conversion");


//getWeather(unit).then(data => console.log(data));

//getAddress("", "", "", "", "", "11364").then(data => console.log(data.features[0].geometry.coordinates));

getWeather(unit, getCoords()).then(data => console.log(data))

const clock = new Clock(time, new Date());

init({conversion: unit, content: content, search: search, unit: unit});


