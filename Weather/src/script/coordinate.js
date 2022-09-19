export async function getCoords(){
    let position = {lat: "", lon: "", time: ""};
    if(!navigator.geolocation){
        console.log("no geolocation")
        return;
    }
    await navigator.geolocation.getCurrentPosition((pos)=>{
        position.lat = pos.coords.latitude;
        position.lon = pos.coords.longitude;
        position.time = new Date();
    }, (err)=>{console.log(err)});
    return await position;
}