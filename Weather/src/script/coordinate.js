export async function getCoords(){

    return new Promise((res, rej) => {
        if(!navigator.geolocation){
            console.log("no geolocation");
            rej("err")
        }
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude.toFixed(4);
            let lon = pos.coords.longitude.toFixed(4);
            let time = new Date();
            res({lat, lon, time, address: ""})
        });
    });
    
    
}
