import { getCoords } from "./coordinate";

export async function getWeather(unit, coords){
    //let coords = await getCoords();
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=temperature_2m&current_weather=true${unit.dataset.unit}&windspeed_unit=mph`;
    return new Promise((resolve, reject) => {
        fetch(url).then((res) => resolve(res.json()));
    });
}