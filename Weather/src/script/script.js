import {Clock} from './clock';
import {getCoords} from './coordinate'
import {init} from './EvenHandler';
const search = document.querySelector("#search");
const time = document.querySelector(".time");
const content = document.querySelector(".content");
const unit = document.querySelector(".conversion");





const clock = new Clock(time, new Date());
const coords = getCoords().then(data => console.log(data));

init({conversion: unit, content: content, search: search});


let lat = "40.7166";
let lon = "-73.7840";
let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true${unit.dataset.unit}`;
console.log(url);