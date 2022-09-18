import {Clock} from './clock.js';
const time = document.querySelector(".time");

const clock = new Clock(time);
clock.init();


getCoords();





async function getCoords(){
    if(!navigator.geolocation){
        console.log("no geolocation")
        return;
    }
    let coords = await navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos.coords.latitude, pos.coords.longitude); 
        console.log(new Date(pos.timestamp)); 
        return {lat: pos.coords.latitude, lon: pos.coords.longitude};
    }, (err)=>{console.log(err)});
    return coords
}


